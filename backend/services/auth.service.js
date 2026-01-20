const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async ({ name, email, password }) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  return { message: "Signup success", user };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) return { error: "User not found" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { error: "Wrong password" };

  const token = jwt.sign({ id: user._id }, "SECRET");
  return { message: "Login success", token };
};
