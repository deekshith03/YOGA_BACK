const Router = require("express");
const { getALLBatches, insertBatches } = require("../controllers/batchController");
const batchRouter = Router();


batchRouter.get("/getdetails", async (req, res, next) => {
  try {
    await getALLBatches(req, res, next);
  } catch (err) {
    res.status(400).json({ errors: err });
  }
});

batchRouter.post("/addbatches", async (req, res, next) => {
    try {
      await insertBatches(req, res, next);
    } catch (err) {
      res.status(400).json({ errors: err });
    }
  });

module.exports = batchRouter;
