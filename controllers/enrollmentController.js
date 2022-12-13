const {
  insertEnrollment,
  getStatus,
  updatePayment,
  findEnrollments,
} = require("../services/enrollmentServices");

const newEnrollment = async (req, res) => {
  const ans = await insertEnrollment(req.body);
  if (ans) {
    res.status(200).send(ans);
  } else {
    res.status(400).send({ msg: "enrollment failed" });
  }
};

const checkStatus = async (req, res) => {
  const { email, enrolledMonth } = req.body;
  res.status(200).send(await getStatus(email, enrolledMonth));
};

const makePayment = async (req, res) => {
  const { email, enrolledMonth } = req.body;
  res.status(200).send(await updatePayment(email, enrolledMonth));
};

const getUserEnrollment = async (req, res) => {
  const email = req.params.email_id;
  res.status(200).send(await findEnrollments(email));
};

module.exports = { newEnrollment, checkStatus, makePayment, getUserEnrollment };
