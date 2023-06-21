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

  // Effects state
  const [delayMix, setDelayMix] = useState(0.2);

  // Audio
  const trackRefs = useRef<Track[]>([]);
  const stepRefs = useRef<HTMLInputElement[][]>([[]]);
  const lampRefs = useRef<HTMLInputElement[]>([]);
  const seqRef = useRef<Tone.Sequence | null>(null);

  const distortion = new Tone.Distortion(0.4).toDestination();
  const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

  // UI
  // const trackIds = [...Array(samples.length).keys()] as const;
  const trackIds = samples.map((sample, i) => {
    return { id: i, name: sample.name };
  });
  console.log(trackIds);
  const stepIds = [...Array(numOfSteps).keys()] as const;

  // handlers
  const handleStartClick = async () => {
    console.log(stepRefs.current);
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
    trackRefs.current = samples.map((sample, i) => ({
      id: i,
      sampler: new Tone.Sampler({
        urls: {
          [NOTE]: sample.url,
        },
      })
        .connect(feedbackDelay)
        .connect(distortion),
    }));

    seqRef.current = new Tone.Sequence(
      (time, step) => {
        trackRefs.current.forEach((track) => {
          if (stepRefs.current[track.id]?.[step]?.checked) {
            track.sampler.triggerAttackRelease(NOTE, '16n', time);
          }
          lampRefs.current[step].checked = true;
        });
      },
      [...stepIds],
      '16n'
    ).start(0);

    return () => {
      seqRef.current?.dispose();
      trackRefs.current.forEach((track) => track.sampler.dispose());
    };
  }, [samples, numOfSteps]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.row}>
          {stepIds.map((stepId) => {
            return (
              <label className={styles.lamp} key={stepId}>
                <input
                  type="radio"
                  name="lamp"
                  id={'lamp' + '-' + stepId}
                  disabled
                  className={styles.lamp__input}
                  ref={(elm) => {
                    if (!elm) return;
                    lampRefs.current[stepId] = elm;
                  }}
                />
                <div className={styles.lamp__content} />
              </label>
            );
          })}
        </div>
        <div className={styles.cellList}>
          {trackIds.map((trackId) => {
            return (
              <div key={trackId.id} className={styles.row}>
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
                          if (!stepRefs.current[trackId.id]) {
                            stepRefs.current[trackId.id] = [];
                          }
                          stepRefs.current[trackId.id][stepId] = el;
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
      </div>
      <div className={styles.controls}>
        <button onClick={handleStartClick} className={styles.button}>
          {isPlaying ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}
