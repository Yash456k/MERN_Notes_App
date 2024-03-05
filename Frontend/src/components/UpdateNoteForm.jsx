import React from "react";

const updateNoteForm = ({ updateNote, updateFieldChange, updateForm }) => {
  return (
    <div>
      <h3>update note</h3>
      <form onSubmit={updateNote}>
        <input
          onChange={updateFieldChange}
          value={updateForm.title}
          name="title"
        />
        <textarea
          onChange={updateFieldChange}
          value={updateForm.body}
          name="body"
        />
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
};

export default updateNoteForm;
