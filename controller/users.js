const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_KEY = "secret123";


const getUser = async (req, res) => {
  if (!req.headers.token) {
    return res.status(401).json({ message: "No token provided" });
  }
  const data = await jwt.decode(req.headers.token, ACCESS_TOKEN_KEY);
  console.log(data);
  return res.status(200).json(data);
}

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email: email,
      password: hashPassword,
    });
    res.status(200).json({ message: "created successfully", data: user });
  } catch (error) {
    console.error("error");
    res.status(404).json({ message: error.message });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign(
      {
        user: user.email,
      },
      ACCESS_TOKEN_KEY
    );
    res.status(200).json({
      message: "successfully logged in",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "failed to login",
    });
  }
};

module.exports = {
  register,
  login,
  getUser
};