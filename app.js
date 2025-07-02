const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");

connectToDB();

app.use(
  cors({
    origin: "https://vroom45.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);
app.use("/api/maps", mapsRoutes);
app.use("/api/rides", rideRoutes);

module.exports = app;
