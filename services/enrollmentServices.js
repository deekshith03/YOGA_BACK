const Enrollment = require("../models/EnrollmentModel");

const insertEnrollment = async (data) => {
  console.log(data);
  const [enrollment, created] = await Enrollment.findOrCreate({
    where: {
      email: data.email,
      enrolledMonth: data.enrolledMonth,
    },
    defaults: {
      paymentStatus: false,
    },
  });

  if (enrollment) {
    enrollment.batchId = data.batchId;
    return await enrollment.save();
  } else if (created) {
    return enrollment;
  }
};

const getStatus = async (email, enrolledMonth) => {
  return await Enrollment.findOne({
    where: { email: email, enrolledMonth: enrolledMonth },
  });
};

const updatePayment = async (email, enrolledMonth) => {
  return await Enrollment.update(
    { paymentStatus: true },
    {
      where: {
        email: email,
        enrolledMonth: enrolledMonth,
      },
    }
  );
};
exports.insertEnrollment = insertEnrollment;
exports.getStatus = getStatus;
exports.updatePayment = updatePayment;
