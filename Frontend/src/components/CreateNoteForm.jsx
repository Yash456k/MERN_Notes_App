const CreateNoteForm = ({ createNote, createForm, updateCreateFormField }) => {
  return (
    <div>
      <h3>create note</h3>
      <form onSubmit={createNote}>
        <input
          onChange={updateCreateFormField}
          value={createForm.title}
          name="title"
        />
        <textarea
          onChange={updateCreateFormField}
          value={createForm.body}
          name="body"
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
