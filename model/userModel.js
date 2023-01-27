const mongoose = require("mongoose");

// firstname: {
//   type: String,
//   required: [true, "Firstname is required"],
//   minlenght: [6, "Firstname lenght must be at least 6 characters"],
//   maxlenght: [50, "Firstname lenght must be at least 50 characters"],
// },
// lastname: {
//   type: String,
//   required: [true, "Lastname is required"],
//   maxlenght: [50, "Lastname lenght must be at least 50 characters"],
// },
// email: { type: String, required: true, message: "email is required" },
// phone: String,
// picture: String,
// dateOfBirth: Date,
// registerDate: { type: Date, default: Date.now },
const Schema = new mongoose.Schema({
  email: String,
  password: String
});


module.exports = mongoose.model("User", Schema);