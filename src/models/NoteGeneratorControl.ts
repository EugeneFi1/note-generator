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
