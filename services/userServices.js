const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getUserWithEmail = async (email) => {
  return await User.findByPk(email);
};

const createUser = async (email, name, password, age) => {
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  return await User.create({
    email: email,
    name: name,
    age: age,
    password: password,
  });
};
const comparePassword = async (password, user) => {
  return await bcrypt.compare(password, user.password);
};
exports.getUserWithEmail = getUserWithEmail;
exports.createUser = createUser;
exports.comparePassword = comparePassword;
