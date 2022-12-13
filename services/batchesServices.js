const Batch = require("../models/batchModel");

const addBatches = async (data) => {
  return await Batch.bulkCreate(data);
};

exports.addBatches = addBatches;
