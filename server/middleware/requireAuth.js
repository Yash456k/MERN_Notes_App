const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

async function requireAuth(req, res, next) {
  try {
    const token = req.cookies.Auth;

    if (!token) return res.sendStatus(401);

    const decoded = jwt.verify(token, process.env.SECRET);

    console.log(decoded);

    if (Date.now() > decoded.exp) return res.sendStatus(401);

    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = requireAuth;
