const Notes = ({ notes, deleteNote, toggleNote }) => {
  return (
    <div>
      <h1>Notes</h1>
      {notes &&
        notes.map((note) => {
          return (
            <div key={note._id}>
              <h3>{note.title}</h3>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
              <button onClick={() => toggleNote(note)}>Update Note</button>
            </div>
          );
        })}
    </div>
  );
};

export default Notes;
