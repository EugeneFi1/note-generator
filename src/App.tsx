import { useState } from "react";
import "./App.css";
import { NoteViewer } from "./components/NoteViewer";
import { NoteGeneratorControl } from "./components/NoteGeneratorControl";
import { INITIAL_NOTE } from "./models/Notes";

function App() {
  const [note, setNote] = useState(INITIAL_NOTE);

  return (
    <>
      <div style={{ marginLeft: "120px" }}>
        <NoteViewer note={note} />
      </div>
      <div style={{ marginTop: "25px" }}>
        <NoteGeneratorControl noteEmitter={(note) => setNote(note)} />
      </div>
    </>
  );
}

export default App;
