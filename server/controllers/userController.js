const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const handleSignup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashedPassword });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("no user");
      return res.sendStatus(401);
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      console.log("wrong pass");
      return res.sendStatus(401);
    }
    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;

    const auth = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    res.cookie("Auth", auth, {
      maxAge: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: true,
    });

    console.log("attempted login and created cookie for : ");
    console.log(email);

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.send("inside try catch").sendStatus(400);
  }
};

const handleLogout = async (req, res) => {
  try {
    res.cookie("Auth", "", { maxAge: 0 });
    req.user = null;
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
};

const checkAuth = async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
};

module.exports = { handleSignup, handleLogin, handleLogout, checkAuth };
