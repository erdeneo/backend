const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  orignal: String,
  short: String,
  owner: String,
});

const Url = mongoose.model("url", Schema);
module.exports = Url

