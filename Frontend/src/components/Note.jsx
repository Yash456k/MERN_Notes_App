import React from "react";
import notesStore from "../stores/notesStore";

const Note = ({ note }) => {
  const store = notesStore((store) => {
    return { toggleNote: store.toggleNote, deleteNote: store.deleteNote };
  });
  return (
    <div>
      <h3>{note.title}</h3>
      <button onClick={() => store.deleteNote(note._id)}>Delete</button>
      <button onClick={() => store.toggleNote(note)}>Update Note</button>
    </div>
  );
};

export default Note;
