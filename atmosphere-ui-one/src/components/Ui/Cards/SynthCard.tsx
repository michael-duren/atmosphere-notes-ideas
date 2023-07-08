import { useEffect, useState } from 'react';
import { synthOne } from '../../../stores/music/tone/mix.ts';
import AnimatedKnob from '../Knobs/AnimatedKnob.tsx';
import WaveFormKnob from '../Knobs/WaveFormKnob.tsx';
import { formatFrequency, toFrequency } from '../../../utils/toFrequency.ts';

export default function SynthCard() {
  const [modulation, setModulation] = useState(0);
  const [wave, setWave] = useState<'sin' | 'triangle' | 'square' | 'sawtooth'>(
    'sin'
  );
  const [attack, setAttack] = useState(0.05);
  const [decay, setDecay] = useState(0.7);
  const [sustain, setSustain] = useState(1);
  const [release, setRelease] = useState(0.2);
  const [filterFreq, setFilterFreq] = useState(1);
  const [chorus, setChorus] = useState(0);

  useEffect(() => {
    synthOne.synth.envelope.attack = +attack.toFixed(2);
    console.log(+(attack / 2).toFixed(2));
  }, [attack]);
  useEffect(() => {
    synthOne.synth.envelope.decay = +(decay / 2).toFixed(2);
  }, [decay]);
  useEffect(() => {
    synthOne.synth.envelope.sustain = +sustain.toFixed(1);
  }, [sustain]);
  useEffect(() => {
    synthOne.synth.envelope.sustain = +(release / 2).toFixed(2);
  }, [release]);

  useEffect(() => {
    synthOne.synth.modulationIndex.value = modulation * 100;
  }, [modulation]);

  useEffect(() => {
    switch (wave) {
      case 'sin':
        synthOne.synth.oscillator.type = 'fatsine1';
        return;
      case 'triangle':
        synthOne.synth.oscillator.type = 'fattriangle';
        return;
      case 'sawtooth':
        synthOne.synth.oscillator.type = 'fatsawtooth';
        return;
      case 'square':
        synthOne.synth.oscillator.type = 'fatsquare';
        return;
      default:
        synthOne.synth.oscillator.type = 'fatsine1';
    }
  }, [wave]);

  useEffect(() => {
    synthOne.filter.frequency.value = toFrequency(filterFreq);
    console.log(synthOne.chorus);
    console.log(synthOne.filter);
  }, [filterFreq]);

  useEffect(() => {
    synthOne.chorus.feedback.value = chorus;
    synthOne.chorus.frequency.value = chorus < 0.5 ? chorus : chorus * 0.01;

    console.log(chorus * 0.1);
  }, [chorus]);

  return (
    <div className="bg-gray-transparent flex items-center rounded-2xl justify-center  p-10">
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Modulation'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
          titleSize="text-sm"
        />
        <WaveFormKnob wave={wave} setWave={setWave} />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Attack'}
          level={attack}
          setter={(num: number) => setAttack(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Decay'}
          level={decay}
          setter={(num: number) => setDecay(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Sustain'}
          level={sustain}
          setter={(num: number) => setSustain(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Release'}
          level={release}
          setter={(num: number) => setRelease(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Filter'}
          level={filterFreq}
          setter={(num: number) => setFilterFreq(num)}
          titleSize="text-sm"
          displaySize="text-xs"
          display={formatFrequency(toFrequency(filterFreq))}
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Chorus'}
          level={chorus}
          setter={(num: number) => setChorus(num)}
          titleSize="text-sm"
        />
      </div>
    </div>
  );
}
