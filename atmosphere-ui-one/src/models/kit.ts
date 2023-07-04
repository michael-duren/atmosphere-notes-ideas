import * as Tone from 'tone';

export interface Drum {
  id: number;
  name: string;
  sound: string;
  steps: boolean[];
  sampler?: Tone.Sampler;
}

// export const kit: Drum[] = [
//   {
//     name: 'BD',
//     sound: '/sounds/vocal-kick.wav',
//   },
//   {
//     name: 'SD',
//     sound: '/sounds/snare.wav',
//   },
//   {
//     name: 'CL',
//     sound: '/sounds/clap.wav',
//   },
//   {
//     name: 'CH',
//     sound: '/sounds/closed-hat.wav',
//   },
// ];
