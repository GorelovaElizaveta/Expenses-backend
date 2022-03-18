const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskScheme = new Schema({
  text: String,
  Expenses: Number,
  Date: String
});

module.exports = Task = mongoose.model("task", taskScheme);