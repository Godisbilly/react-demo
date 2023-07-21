import { useState } from "react";

function Form({ addNote }) {
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNote({
      content: newNote,
      important: Math.random() > 0.5,
      id: Math.random(),
      date: new Date().toISOString(),
    }).then((res) => {
      setNewNote("");
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default Form;
