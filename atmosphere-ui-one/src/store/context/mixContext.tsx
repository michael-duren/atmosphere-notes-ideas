import { createContext, useState } from 'react';
import * as Tone from 'tone';

export interface IMixContext {
  distortion: Tone.Distortion;
  reverb: Tone.Reverb;
  delay: Tone.PingPongDelay;
}

export const MixContext = createContext<IMixContext | null>(null);

export const MixProvider = ({ children }: { children: React.ReactNode }) => {
  const distortion = new Tone.Distortion(0.8);
  const reverb = new Tone.Reverb(0.8);
  const delay = new Tone.PingPongDelay(0.8);

  return (
    <MixContext.Provider value={{ distortion, reverb, delay }}>
      {children}
    </MixContext.Provider>
  );
};
