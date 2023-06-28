import * as Tone from 'tone';
import { delay, distortion, distortionGain, reverb, volume } from './mix.ts';

export let fmSynthOne = new Tone.FMOscillator().chain(
  distortion,
  distortionGain,
  reverb,
  delay,
  volume,
  Tone.Destination
);
export const fmSynthTwo = new Tone.FMSynth().chain(
  distortion,
  distortionGain,
  reverb,
  delay,
  volume,
  Tone.Destination
);
