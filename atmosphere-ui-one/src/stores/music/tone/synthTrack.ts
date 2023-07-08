import * as Tone from 'tone';
import * as Tonal from 'tonal';
import { delay, distortion, distortionGain, reverb, volume } from './mix.ts';
import { OmniOscillatorType } from 'tone/build/esm/source/oscillator/OscillatorInterface';
import { Chorus, Filter, FMSynth, Gain, LFO, Pattern } from 'tone';
import { modulo } from './modulo.ts';
import { NoteName } from 'tonal';
import { random } from '../../../utils/random.ts';
import { PatternName } from 'tone/build/esm/event/PatternGenerator';

class SynthTrack {
  // fields
  private _synth: Tone.FMSynth;
  private _pattern: Pattern<number>;
  private notes: NoteName[];
  private transpose: number = 0;
  private noteDuration: string;
  private _sequence: number[];
  private _patternType: PatternName;
  private _chorus: Chorus;
  private _filter: Filter;
  private _filterTwo: Filter;
  private _lfo: LFO;
  private _lfoGain: Gain<'gain'>;

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
    this._synth = new Tone.FMSynth({
      modulation: {
        modulationType: 'triangle',
      },
    });
    this._synth.oscillator.type = oscillatorType;
    this._synth.set({
      modulation: {
        modulationType: 'sine',
      },
    });

    // synth effects
    this._filter = new Tone.Filter(100, 'lowpass');
    this._filterTwo = new Tone.Filter(100, 'lowpass');
    this._filter.rolloff = -48;
    this._filter.Q.value = 1;
    this._chorus = new Tone.Chorus(500, 0.01, 1);
    this._lfo = new Tone.LFO('8n', 400, 20000);
    this._lfoGain = new Tone.Gain(0.5);
    this._lfo.connect(this._lfoGain);
    this._lfo.type = 'sine2';
    this._lfoGain.connect(this._chorus.frequency);
    this._lfoGain.connect(this._filterTwo.frequency);
    this._synth.chain(this._chorus, this._filter, this._filterTwo);

    // initalize sequence
    this._sequence = this.generateRandomSequence();
    this.notes = Tonal.Scale.get('C4 minor').notes;

    // initialize pattern
    this._patternType = patternType;
    this._pattern = new Tone.Pattern(
      (time: number, noteNumber: number) => {
        const note = this.mapNotes(noteNumber + this.transpose, this.notes);
        this._synth.triggerAttackRelease(note, this.noteDuration, time);
      },
      this._sequence,
      patternType
    );

    // chain to effects bus
    this.filterTwo.chain(
      distortion,
      distortionGain,
      reverb,
      delay,
      volume,
      Tone.Destination
    );
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
  get synth(): FMSynth {
    return this._synth;
  }
  set synth(value: FMSynth) {
    this._synth = value;
  }
  get filterTwo(): Filter {
    return this._filterTwo;
  }
  set filterTwo(value: Filter) {
    this._filterTwo = value;
  }
  get lfo(): LFO {
    return this._lfo;
  }

  set lfo(value: LFO) {
    this._lfo = value;
  }
  get filter(): Filter {
    return this._filter;
  }

  set filter(value: Filter) {
    this._filter = value;
  }
}

export default SynthTrack;
