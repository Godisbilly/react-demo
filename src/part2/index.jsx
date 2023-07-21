import "./index.css";
import Part from "./Part";
import { useState, useEffect } from "react";
import { getNotes, createNote, updateNote } from "./services/note";
import Footer from "./Footer";
function Part2() {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const eventHandler = (data) => {
    setNotes(data);
  };

  const addNewNote = (newNote) => {
    return createNote(newNote).then(() => {
      setNotes(notes.concat(newNote));
    });
  };

  const toggleImportance = ({ id }) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    updateNote(id, changedNote)
      .then((data) => {
        setNotes(notes.map((note) => (note.id !== id ? note : data)));
      })
      .catch(() => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const hook = () => {
    getNotes().then(eventHandler);
  };

  useEffect(hook, []);
  return (
    <>
      <Part
        message={errorMessage}
        notes={notes}
        addNewNote={addNewNote}
        toggleImportance={toggleImportance}
      />
      <Footer />
    </>
  );
}

export default Part2;
