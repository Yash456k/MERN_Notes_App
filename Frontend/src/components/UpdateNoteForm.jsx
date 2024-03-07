import notesStore from "../stores/notesStore";

const updateNoteForm = () => {
  const store = notesStore();
  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h3>update note</h3>
      <form onSubmit={store.updateNote}>
        <input
          onChange={store.updateFieldChange}
          value={store.updateForm.title}
          name="title"
        />
        <textarea
          onChange={store.updateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
};

export default updateNoteForm;
