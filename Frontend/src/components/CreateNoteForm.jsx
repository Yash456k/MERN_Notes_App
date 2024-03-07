import notesStore from "../stores/notesStore";

const CreateNoteForm = () => {
  const store = notesStore();
  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h3>create note</h3>
      <form onSubmit={store.createNote}>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
