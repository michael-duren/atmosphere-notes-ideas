const song = {
  bpm: 120,
  volume: 90,
  tracks: [
    {
      name: 'kick',
      sound: '/public/kick.wav',
      pattern: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    },
    {
      name: 'snare',
      sound: '/public/snare.wav',
      pattern: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    },
    {
      name: 'hihat',
      sound: '/public/hihat.wav',
      pattern: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    },
    {
      name: 'ride',
      sound: '/public/ride.wav',
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    },
    {
      name: 'crash',
      sound: '/public/crash.wav',
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    },
    {
      name: 'clap',
      sound: '/public/clap.wav',
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    },
  ],
};
