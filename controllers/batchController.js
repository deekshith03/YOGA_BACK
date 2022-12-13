const Batch = require("../models/batchModel");
const { addBatches } = require("../services/batchesServices");

const getALLBatches = async (req, res) => {
  res.status(200).send(await Batch.findAll());
};

const insertBatches = async (req, res) => {
  const data = await addBatches(req.body.data);
  res.status(200).send(data);
};

module.exports = { getALLBatches, insertBatches };
