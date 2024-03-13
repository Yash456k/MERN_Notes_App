import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,
  createForm: {
    title: "",
    body: "",
  },
  updateForm: {
    _id: null,
    title: "",
    body: "",
  },
  fetchNotes: async () => {
    const api = axios.create({
      baseURL: "http://localhost:3000", // Replace with your API base URL
      withCredentials: true, // Enable sending and receiving cookies
      headers: {
        "Content-Type": "application/json", // Example of setting a custom header
        // Add other custom headers if needed
      },
    });

    const res = await api.get("/notes");

    set({
      notes: res.data.note,
    });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();
    const { notes, createForm } = notesStore.getState();
    const res = await axios.post("/notes", createForm);

    set({
      notes: [...notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    });
  },

  deleteNote: async (_id) => {
    const res = await axios.delete(`/notes/${_id}`);
    const { notes } = notesStore.getState();

    const newNotes = [...notes].filter((note) => {
      return note._id !== _id;
    });

    set({
      notes: newNotes,
    });
  },
  toggleNote: async ({ _id, title, body }) => {
    set({
      updateForm: {
        _id,
        title,
        body,
      },
    });
  },
  updateFieldChange: (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    set((state) => {
      return { updateForm: { ...state.updateForm, [name]: value } };
    });
  },

  updateNote: async (e) => {
    e.preventDefault();
    const {
      notes,
      updateForm: { title, body, _id },
    } = notesStore.getState();

    const res = await axios.put(`/notes/${_id}`, {
      title,
      body,
    });

    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        title: "",
        body: "",
      },
    });
  },
}));

export default notesStore;
