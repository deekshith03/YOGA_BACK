const Router = require("express");
const {
  newEnrollment,
  checkStatus,
  makePayment,
  getUserEnrollment,
} = require("../controllers/enrollmentController");
const enrollmentRouter = Router();

enrollmentRouter.post("/newenrollment", async (req, res, next) => {
  try {
    await newEnrollment(req, res, next);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

enrollmentRouter.post("/getenrollmentstatus", async (req, res, next) => {
  try {
    await checkStatus(req, res, next);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

enrollmentRouter.post("/makepayment", async (req, res, next) => {
  try {
    await makePayment(req, res, next);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

enrollmentRouter.get("/getenrollments/:email_id", async (req, res, next) => {
  try {
    await getUserEnrollment(req, res, next);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

module.exports = enrollmentRouter;
