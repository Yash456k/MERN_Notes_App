import notesStore from "../stores/notesStore";
import Note from "./Note";

const Notes = () => {
  const store = notesStore();

  return (
    <div>
      <h1>Notes</h1>
      {store.notes &&
        store.notes.map((note) => {
          return <Note note={note} key={note._id} />;
        })}
    </div>
  );
};

export default Notes;
