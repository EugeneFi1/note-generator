export interface NoteGeneratorControlComponentState {
  interval: number;
  isStarted: boolean;
}

export interface NoteGeneratorControlComponentProps {
  noteEmitter: (note: string) => void;
}

export const DEFAULT_STATE_VALUES: NoteGeneratorControlComponentState = {
  interval: 1000,
  isStarted: false,
};

export const SAMPLE_OPTIONS = {
  urls: {
    C4: "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    A4: "A4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
};
