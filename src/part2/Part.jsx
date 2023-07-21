import { useState } from "react";
import Form from "./Form";
import "./index.css";
import Notification from "./Notification";

function Note({ note, toggleImportance }) {
  const label = note.important ? "make not important" : "make important";
  return (
    <li className="note">
      <span>{note.content}</span>
      <button className="btn" onClick={toggleImportance}>
        {label}
      </button>
    </li>
  );
}

function Part({ notes, addNewNote, toggleImportance, message }) {
  const [showAll, setShowAll] = useState(true);
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (newNote) => {
    return addNewNote(newNote);
  };

  const toggleImportance_ = (note) => {
    toggleImportance(note);
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={message} />
      <div>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportance_(note)}
            />
          ))}
        </ul>
      </div>
      <Form notes={notes} addNote={addNote} />
    </div>
  );
}

export default Part;
