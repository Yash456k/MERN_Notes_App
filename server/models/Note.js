const mongoose = require("mongoose");

const noteScehma = new mongoose.Schema({
  title: String,
  body: String,
});

const Note = mongoose.model("Note", noteScehma);

module.exports = Note;
