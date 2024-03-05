const Note = require("../models/Note.js");

async function displayAllNotes(req, res) {
  const note = await Note.find();
  res.json({
    note,
  });
}

const findNoteById = async (req, res) => {
  const id = req.params.id;

  const note = await Note.findById(id);

  res.json({
    note,
  });
};

const changeNoteById = async (req, res) => {
  const { title, body } = req.body;
  const id = req.params.id;

  await Note.findByIdAndUpdate(id, { title, body });

  const note = await Note.findById(id);

  res.json({ note });
};

const createNote = async (req, res) => {
  const { title, body } = req.body;

  const note = await Note.create({ title, body });

  res.json({
    note,
  });
};

const deleteNoteById = async (req, res) => {
  const id = req.params.id;

  const note = await Note.findByIdAndDelete(id);

  res.json({
    note,
  });
};

module.exports = {
  displayAllNotes,
  createNote,
  findNoteById,
  changeNoteById,
  deleteNoteById,
};
