require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const {
  findNoteById,
  changeNoteById,
  createNote,
  deleteNoteById,
  displayAllNotes,
} = require("./controllers/notesController.js");
const connectToDatabase = require("./config/connectToDatabase.js");
const {
  handleSignup,
  handleLogin,
  checkAuth,
  handleLogout,
} = require("./controllers/userController.js");
const requireAuth = require("./middleware/requireAuth.js");

const cors = require("cors");

connectToDatabase();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/signup", handleSignup);
app.get("/login", handleLogin);
app.get("/check", requireAuth, checkAuth);
app.get("/logout", handleLogout);

app.get("/notes", displayAllNotes);
app.get("/notes/:id", findNoteById);
app.put("/notes/:id", changeNoteById);
app.post("/notes", createNote);
app.delete("/notes/:id", deleteNoteById);

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
