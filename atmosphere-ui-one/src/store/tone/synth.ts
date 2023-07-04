import * as Tone from 'tone';
import { delay, distortion, distortionGain, reverb, volume } from './mix.ts';
import { OmniOscillatorType } from 'tone/build/esm/source/oscillator/OscillatorInterface';

class Synth {
  private synth: Tone.Synth<Tone.SynthOptions>;
  constructor(oscillatorType: OmniOscillatorType = 'fatsawtooth') {
    //   initialize synth
    this.synth = new Tone.Synth();
    this.synth.oscillator.type = oscillatorType;

    this.synth.chain(
      distortion,
      distortionGain,
      reverb,
      delay,
      volume,
      Tone.Destination
    );
  }

  //
}

export default Synth;
