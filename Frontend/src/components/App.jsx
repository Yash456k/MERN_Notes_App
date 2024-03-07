import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import UpdateNoteForm from "./UpdateNoteForm";
import CreateNoteForm from "./CreateNoteForm";
import notesStore from "../stores/notesStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <>
      <Notes />
      <UpdateNoteForm />
      <CreateNoteForm />
    </>
  );
}

export default App;
