const Router = require("express");
const { body } = require("express-validator");
const { registerUser, loginUser } = require("../controllers/userController");

const userRouter = Router();

userRouter.post(
  "/register",
  body("name", "name is required").notEmpty(),
  body("email", "Enter valid email").isEmail(),
  body("password", "password should be of 8 - 16 characters length").isLength({
    min: 8,
    max: 16,
  }),
  body("age", "age should be of 18 to 65").isInt({
    min: 18,
    max: 65,
  }),
  async (req, res, next) => {
    try {
      await registerUser(req, res, next);
    } catch (err) {
      console.log(err);
      res.status(400).json({ errors: err });
    }
  }
);

userRouter.post(
  "/login",
  body("email", "Enter valid email").isEmail(),
  body("password", "password should be of 8 - 16 characters length"),
  async (req, res, next) => {
    try {
      await loginUser(req, res, next);
    } catch (err) {
      console.log(err);
      res.status(400).json({ errors: err });
    }
  }
);

module.exports = userRouter;
