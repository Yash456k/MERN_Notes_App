import Notes from "../components/Notes";
import UpdateNoteForm from "../components/UpdateNoteForm";
import CreateNoteForm from "../components/CreateNoteForm";
import notesStore from "../stores/notesStore";
import { useEffect } from "react";

const NotesPage = () => {
  const store = notesStore();
  useEffect(() => {
    store.fetchNotes();
  }, []);
  return (
    <div>
      <div>
        <Notes />
        <UpdateNoteForm />
        <CreateNoteForm />
      </div>
    </div>
  );
};

export default NotesPage;
