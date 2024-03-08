import notesStore from "../stores/notesStore";

const CreateNoteForm = () => {
  const store = notesStore();
  if (store.updateForm._id) return <></>;

  return (
    <div className="text-3xl">
      <h3>create note</h3>
      <form onSubmit={store.createNote}>
        <input
          className="border-2 border-black"
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <textarea
          className="border-2 border-black resize-none"
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
