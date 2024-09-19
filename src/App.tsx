import { useState } from 'react'
import './App.css'
import { NoteViewer } from './components/NoteViewer'
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Stop from '@mui/icons-material/Stop';
import TextField from '@mui/material/TextField';
import random from 'random'

function App() {
  const [note, setNote] = useState("C");
  const [interval, startInterval] = useState(0);
  const [time, setTime] = useState(1000); // ms
  

  const runNoteChanger = () => {
    const notes = ["Cb", "C", "C#","Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "H"]
    const notesLength = notes.length - 1;
    startInterval(setInterval(() => {
      setNote(notes[random.int(0,notesLength)])
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

      <IconButton color="success" aria-label="add an alarm"
        onClick={runNoteChanger}
      >
        <PlayArrow />
      </IconButton>

      <IconButton color="error" aria-label="add an alarm"
        onClick={stopInterval}
      >
        <Stop />
      </IconButton>
      </div>
    </>
  )
}

export default App
