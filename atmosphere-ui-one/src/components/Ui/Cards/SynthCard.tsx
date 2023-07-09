import { useEffect, useState } from 'react';
import { synthOne } from '../../../stores/music/tone/mix.ts';
import AnimatedKnob from '../Knobs/AnimatedKnob.tsx';
import WaveFormKnob from '../Knobs/WaveFormKnob.tsx';
import { formatFrequency, toFrequency } from '../../../utils/toFrequency.ts';
import NoteFrequencyKnob from '../Knobs/NoteFrequencyKnob.tsx';
import { note } from '../../../utils/getNoteTime.ts';

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
  const [filterLfo, setFilterLfo] = useState(1);
  const [metalLfo, setMetalLfo] = useState(1);
  const [lfoSpeed, setLfoSpeed] = useState<typeof note>('8n');
  const [lfoWave, setLfoWave] = useState<
    'sin' | 'triangle' | 'square' | 'sawtooth'
  >('sin');

  // envelopes
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

  // metal
  useEffect(() => {
    synthOne.synth.modulationIndex.value = modulation * 8;
  }, [modulation]);

  // wave form
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

  // filter freq
  useEffect(() => {
    synthOne.filter.frequency.value = toFrequency(filterFreq);
  }, [filterFreq]);

  // chorus
  useEffect(() => {
    synthOne.chorus.feedback.value = chorus;
    synthOne.chorus.frequency.value = chorus < 0.5 ? chorus : chorus * 0.01;
  }, [chorus]);

  // filter lfo amount
  useEffect(() => {
    synthOne.lfoFilter.min = toFrequency(filterLfo);
  }, [filterLfo]);
  // metal lfo amount
  useEffect(() => {
    synthOne.lfoMetal.min = metalLfo;
  }, [metalLfo]);
  // lfo speeds
  useEffect(() => {
    synthOne.lfoFilter.frequency.value = lfoSpeed;
    synthOne.lfoMetal.frequency.value = lfoSpeed;
  }, [lfoSpeed]);
  // lfo waveform
  useEffect(() => {
    switch (wave) {
      case 'sin':
        synthOne.lfoFilter.type = 'sine2';
        synthOne.lfoMetal.type = 'sine2';
        return;
      case 'triangle':
        synthOne.lfoFilter.type = 'triangle2';
        synthOne.lfoMetal.type = 'triangle2';
        return;
      case 'sawtooth':
        synthOne.lfoFilter.type = 'sawtooth2';
        synthOne.lfoMetal.type = 'sawtooth2';
        return;
      case 'square':
        synthOne.lfoFilter.type = 'square2';
        synthOne.lfoMetal.type = 'square2';
        return;
      default:
        synthOne.lfoMetal.type = 'sine';
    }
  }, [lfoWave]);

  return (
    <div className="bg-gray-transparent flex items-center rounded-2xl justify-center  p-10">
      <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-12">
        {/* Row One */}
        <WaveFormKnob wave={wave} setWave={setWave} title="Waveform" />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Chorus'}
          level={chorus}
          setter={(num: number) => setChorus(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#4F46E5'}
          title={'Attack'}
          level={attack}
          setter={(num: number) => setAttack(num)}
          titleSize="text-sm"
        />
        {/* Row 2 */}
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
          title={'Filter Mod'}
          level={filterLfo}
          setter={(num: number) => setFilterLfo(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#4F46E5'}
          title={'Decay'}
          level={decay}
          setter={(num: number) => setDecay(num)}
          titleSize="text-sm"
        />
        {/* Row 3 */}
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Metal'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#7C3AED'}
          title={'Metal Mod'}
          level={metalLfo}
          setter={(num: number) => setMetalLfo(num)}
          titleSize="text-sm"
        />
        <AnimatedKnob
          color={'#4F46E5'}
          title={'Sustain'}
          level={sustain}
          setter={(num: number) => setSustain(num)}
          titleSize="text-sm"
        />
        {/* Row 4 */}
        <NoteFrequencyKnob
          note={lfoSpeed}
          setNote={setLfoSpeed}
          title={'LFO Freq'}
        />
        <WaveFormKnob wave={lfoWave} setWave={setLfoWave} title="LFO Shape" />
        <AnimatedKnob
          color={'#4F46E5'}
          title={'Release'}
          level={release}
          setter={(num: number) => setRelease(num)}
          titleSize="text-sm"
        />
      </div>
    </div>
  );
}
