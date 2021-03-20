require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

//db connect
connectDB();

const app = express();

app.use(express.json());
//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const sever = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  sever.close(() => process.exit(1));
});
