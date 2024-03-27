import Notes from "../components/Notes";
import UpdateNoteForm from "../components/UpdateNoteForm";
import CreateNoteForm from "../components/CreateNoteForm";
import notesStore from "../stores/notesStore";
import { useEffect } from "react";
import authStore from "../stores/authStore";

const NotesPage = () => {
  const authstore = authStore();
  const store = notesStore();
  useEffect(() => {
    store.fetchNotes(authstore.loginCookie);
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <UpdateNoteForm />
        <CreateNoteForm />
        <Notes />
      </div>
    </div>
  );
};

export default NotesPage;
