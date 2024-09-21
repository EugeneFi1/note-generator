import { useState } from 'react'
import './App.css'
import { NoteViewer } from './components/NoteViewer'
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';
import TextField from '@mui/material/TextField';
import random from 'random'
import * as Tone from "tone";


// const piano = new Piano({
//   velocities: 5
// })

function play(note: string) {
  const piano = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",    }).toDestination();
}

function App() {
  const [note, setNote] = useState("C");
  const [interval, startInterval] = useState(0);
  const [time, setTime] = useState(1000); // ms
  // create the piano and load 5 velocity steps
    

  const sampler = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

    // piano.toDestination()

    // piano.load().then(() => {
    //   console.log('loaded!')
    // })

  const runNoteChanger = () => {
    

    //connect it to the speaker output
    // piano.toDestination()
    const notes = ["Cb", "C", "C#","Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"]
    const notesLength = notes.length - 1;

  
      //Tone.loaded().then(() => {
        sampler.triggerAttackRelease([note + "4"], 4);


    startInterval(setInterval(() => {
      const selectedNote = notes[random.int(0,notesLength)]
      setNote(selectedNote)      
      //Tone.loaded().then(() => {
        sampler.triggerAttackRelease([selectedNote + "4"], 4);
      //});
    }, time))
    
  }

  const stopInterval = () => {
    clearInterval(interval)
  }

  return (
    <>
      <div style={{marginLeft: "120px"}}>
      <NoteViewer note={note}/>
      </div>
      <div style={{marginTop: "25px"}}>
      <TextField
          id="outlined-number"
          label="ms"
          type="number"
          defaultValue={time}
          onChange={(event) => {
            setTime(Number(event.target.value))
          }}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />

      <IconButton color="success"
        onClick={runNoteChanger}
      >
        <PlayArrow />
      </IconButton>

      <IconButton color="error"
        onClick={stopInterval}
      >
        <Stop />
      </IconButton>
      </div>
    </>
  )
}

export default App
