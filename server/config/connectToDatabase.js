const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDatabase() {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("database connected");
    })
    .catch((e) => {
      console.log("database connection failed");
      console.log(e);
    });
}

module.exports = connectToDatabase;
