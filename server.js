require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const batchRouter = require("./routes/batchRouter");
const enrollmentRouter = require("./routes/enrollmentRouter");
const app = express();
const sequelize = require("./models/index");

if (process.env.NODE_ENV == "DEV") {
  sequelize
    .sync()
    .then(() => {
      console.log("succesfully synced");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
} else {
  sequelize
    .sync()
    .then(() => {
      console.log("succesfully synced");
    })
    .catch((err) => {
      console.log("Failed to sync db: " + err.message);
    });
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to beszkoder application." });
});
app.use("/api/user/", userRouter);
app.use("/api/batches", batchRouter);
app.use("/api/enrollment", enrollmentRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
