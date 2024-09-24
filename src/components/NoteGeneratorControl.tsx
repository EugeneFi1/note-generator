import { Component, ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Stop from "@mui/icons-material/Stop";
import TextField from "@mui/material/TextField";
import random from "random";
import { Sampler } from "tone";
import {
  DEFAULT_STATE_VALUES,
  NoteGeneratorControlComponentProps,
  NoteGeneratorControlComponentState,
} from "../models/NoteGeneratorControl";
import { INITIAL_NOTE, NOTES } from "../models/Notes";

export class NoteGeneratorControl extends Component<
  NoteGeneratorControlComponentProps,
  NoteGeneratorControlComponentState
> {
  private sampler: Sampler;
  private intervalId?: number;

  constructor(props: NoteGeneratorControlComponentProps) {
    super(props);

    this.state = DEFAULT_STATE_VALUES;

    this.sampler = new Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  }

  render(): ReactNode {
    return (
      <>
        <TextField
          id="outlined-number"
          label="ms"
          type="number"
          defaultValue="1000"
          disabled={this.state.isStarted}
          onChange={(event) => {
            this.setState((currentState) => ({
              ...currentState,
              interval: Number(event.target.value),
            }));
          }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

        <IconButton
          color="success"
          onClick={this.runNoteChanger}
          disabled={this.state.isStarted}
        >
          <PlayArrow />
        </IconButton>

        <IconButton
          color="error"
          onClick={this.stopInterval}
          disabled={!this.state.isStarted}
        >
          <Stop />
        </IconButton>
      </>
    );
  }

  private runNoteChanger = () => {
    const notes = NOTES;
    const notesLength = notes.length - 1;

    this.setIsStartedStateValue();

    this.sampler.triggerAttackRelease([INITIAL_NOTE + "4"], 4);

    this.intervalId = setInterval(() => {
      const selectedNote = notes[random.int(0, notesLength)];
      this.props.noteEmitter(selectedNote);
      this.sampler.triggerAttackRelease([selectedNote + "4"], 4);
    }, this.state.interval);
  };

  private stopInterval = () => {
    clearInterval(this.intervalId);
    this.setIsStartedStateValue(false);
  };

  private setIsStartedStateValue(isStarted = true): void {
    this.setState((prevState) => ({
      ...prevState,
      isStarted,
    }));
  }
}
