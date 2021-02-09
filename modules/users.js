const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: "string", require: true },
  password: { type: "string", require: true },
});

module.exports = model("User", userSchema);
