import * as Tone from 'tone';
import * as Tonal from 'tonal';
import { delay, distortion, distortionGain, reverb, volume } from './mix.ts';
import { OmniOscillatorType } from 'tone/build/esm/source/oscillator/OscillatorInterface';
import { Chorus, Pattern } from 'tone';
import { modulo } from './modulo.ts';
import { NoteName } from 'tonal';
import { random } from '../../../utils/random.ts';
import { PatternName } from 'tone/build/esm/event/PatternGenerator';

class SynthTrack {
  // fields
  private synth: Tone.Synth<Tone.SynthOptions>;
  private _pattern: Pattern<number>;
  private notes: NoteName[];
  private transpose: number = 0;
  private noteDuration: string;
  private _sequence: number[];
  private _patternType: PatternName;
  private _chorus: Chorus;

  // constructor
  constructor(
    transpose = 0,
    noteDuration = '8n',
    oscillatorType: OmniOscillatorType = 'fatsawtooth',
    patternType: PatternName = 'up'
  ) {
    this.transpose = transpose;
    this.noteDuration = noteDuration;
    //   initialize synth
    this.synth = new Tone.Synth();
    this.synth.oscillator.type = oscillatorType;

    // initalize sequence
    this._sequence = this.generateRandomSequence();
    this.notes = Tonal.Scale.get('C4 minor').notes;

    // initialize pattern
    this._patternType = patternType;
    this._pattern = new Tone.Pattern(
      (time: number, noteNumber: number) => {
        const note = this.mapNotes(noteNumber + this.transpose, this.notes);
        this.synth.triggerAttackRelease(note, this.noteDuration, time);
      },
      this._sequence,
      patternType
    );

    this._chorus = new Tone.Chorus(4, 0.3, 0.5);
    this._chorus.wet.value = 1;
    this.synth.connect(this._chorus);

    // chain to effects bus
    this.synth.chain(
      distortion,
      distortionGain,
      reverb,
      delay,
      volume,
      Tone.Destination
    );
  }

  // accessors
  get sequence(): number[] {
    return this._sequence;
  }
  set sequence(value: number[]) {
    this._sequence = value;
  }
  get pattern(): Pattern<number> {
    return this._pattern;
  }
  set pattern(value: Pattern<number>) {
    this._pattern = value;
  }
  get patternType(): PatternName {
    return this._patternType;
  }
  set patternType(value: PatternName) {
    this._patternType = value;
  }
  get chorus(): Chorus {
    return this._chorus;
  }
  set chorus(value: Chorus) {
    this._chorus = value;
  }
  // methods
  mapNotes(noteNumber: number, notes: string[]) {
    let numNotes = notes.length;
    // determine what note is below or above the current range
    let i = modulo(noteNumber, numNotes);
    //   if the note is too low or high determine octave
    const octave = Math.floor(noteNumber / numNotes);
    const interval = Tonal.Interval.fromSemitones(octave * 12);

    return Tonal.Note.transpose(notes[i], interval);
  }

  generateRandomSequence() {
    const newSequence = [];
    //   number of notes in sequence
    const n = Math.floor(random(3, 9));
    //   create random sequence
    for (let i = 0; i < n; i++) {
      newSequence[i] = Math.floor(random(0, 6));
    }
    return newSequence;
  }
}

export default SynthTrack;
