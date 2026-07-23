const { UserModel } = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const user = await UserModel.findById(data.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  });
};


module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "User not logged in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded.id; // or decoded._id
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};