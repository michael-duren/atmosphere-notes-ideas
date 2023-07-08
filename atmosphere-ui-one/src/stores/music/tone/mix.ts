import * as Tone from 'tone';
import SynthTrack from './synthTrack.ts';

const distortion = new Tone.Distortion(0);
const distortionGain = new Tone.Gain(1);

const reverb = new Tone.Reverb(0.5);

const delay = new Tone.FeedbackDelay(0.5);

const volume = new Tone.Volume(Tone.dbToGain(1));
const synthOne = new SynthTrack();
synthOne.patternType = 'alternateUp';
synthOne.pattern.start();
synthOne.lfo.start();

export { distortion, distortionGain, reverb, delay, volume, synthOne };
