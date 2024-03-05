import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import UpdateNoteForm from "./UpdateNoteForm";
import CreateNoteForm from "./CreateNoteForm";

function App() {
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");

    setNotes(res.data.note);
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/notes", createForm);

    setNotes([...notes, res.data.note]);

    setCreateForm({
      title: "",
      body: "",
    });
  };

  const deleteNote = async (_id) => {
    const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    setNotes(newNotes);
  };

  const toggleNote = async (note) => {
    setUpdateForm({
      _id: note._id,
      title: note.title,
      body: note.body,
    });
  };

  const updateFieldChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateNote = async (e) => {
    e.preventDefault();
    const { title, body } = updateForm;

    const res = await axios.put(
      `http://localhost:3000/notes/${updateForm._id}`,
      {
        title,
        body,
      }
    );

    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === updateForm._id;
    });
    newNotes[noteIndex] = res.data.note;

    setNotes(newNotes);
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  return (
    <>
      <Notes notes={notes} deleteNote={deleteNote} toggleNote={toggleNote} />

      {updateForm._id && (
        <UpdateNoteForm
          updateFieldChange={updateFieldChange}
          updateNote={updateNote}
          updateForm={updateForm}
        />
      )}
      {!updateForm._id && (
        <CreateNoteForm
          createNote={createNote}
          createForm={createForm}
          updateCreateFormField={updateCreateFormField}
        />
      )}
    </>
  );
}

export default App;
