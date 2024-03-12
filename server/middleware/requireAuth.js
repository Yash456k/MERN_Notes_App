const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

async function requireAuth(req, res, next) {
  try {
    console.log("inside the require auth");
    const token = req.cookies.Auth;

    if (!token) {
      console.log(token);
      console.log("no token");
      return res.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    if (Date.now() > decoded.exp) {
      console.log("expired token");
      return res.sendStatus(401);
    }

    const user = await User.findById(decoded.sub);
    if (!user) {
      console.log("no user");
      return res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = requireAuth;
