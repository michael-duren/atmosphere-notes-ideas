import * as Tone from 'tone';

const distortion = new Tone.Distortion(0);
const distortionGain = new Tone.Gain(1);

const reverb = new Tone.Reverb(0.5);

const delay = new Tone.FeedbackDelay(0.5);

export { distortion, distortionGain, reverb, delay };
