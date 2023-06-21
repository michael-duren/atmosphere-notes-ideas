import { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import styles from './App.module.css';

const NOTE = 'C2';

type Track = {
  id: number;
  sampler: Tone.Sampler;
};

type Props = {
  samples: { url: string; name: string }[];
  numOfSteps: number;
};

export default function App({ samples, numOfSteps }: Props) {
  // Playing State
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio
  const tracksRef = useRef<Track[]>([]);
  const stepsRef = useRef<HTMLInputElement[][]>([[]]);
  const seqRef = useRef<Tone.Sequence | null>(null);

  // UI
  const trackIds = [...Array(samples.length).keys()] as const;
  const stepIds = [...Array(numOfSteps).keys()] as const;

  // handlers
  const handleStartClick = async () => {
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying(false);
      return;
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  // events
  useEffect(() => {
    tracksRef.current = samples.map((sample, i) => ({
      id: i,
      sampler: new Tone.Sampler({
        urls: {
          [NOTE]: sample.url,
        },
      }).toDestination(),
    }));

    seqRef.current = new Tone.Sequence(
      (time, step) => {
        tracksRef.current.forEach((track) => {
          if (stepsRef.current[track.id]?.[step]?.checked) {
            track.sampler.triggerAttackRelease(NOTE, '16n', time);
          }
        });
      },
      [...stepIds],
      '16n'
    ).start(0);

    return () => {
      seqRef.current?.dispose();
      tracksRef.current.forEach((track) => track.sampler.dispose());
    };
  }, [samples, numOfSteps]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={'celllist'}>
          {trackIds.map((trackId) => {
            return (
              <div key={trackId} className={styles.row}>
                {stepIds.map((stepId) => {
                  const id = trackId + '-' + stepId;
                  return (
                    <label key={id} className={styles.cell}>
                      <input
                        id="id"
                        type="checkbox"
                        className={styles.cell__input}
                        ref={(el) => {
                          if (!el) return;
                          if (!stepsRef.current[trackId]) {
                            stepsRef.current[trackId] = [];
                          }
                          stepsRef.current[trackId][stepId] = el;
                        }}
                      />
                      <div className={styles.cell__content} />
                    </label>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.row}></div>
      </div>
      <div className={styles.controls}>
        <button onClick={handleStartClick} className={styles.button}>
          {isPlaying ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}
