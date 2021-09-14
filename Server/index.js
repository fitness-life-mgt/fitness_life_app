const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db=require("./config/connection");

app.use(express.json());

app.use("/register",require("./routes/register"));
app.use("/login",require("./routes/login"));
app.use("/makeAppointment",require("./routes/makeAppointment"));
app.use("/editprofile",require("./routes/editProfile"));
app.use("/getProfileDetails",require("./routes/getProfileDetails"));
app.use("/addProfileDetails",require("./routes/addProfileDetails"));
app.use("/pastAppointments",require("./routes/pastAppointments"));

app.listen(8088, () => {
    console.log("Server is running on port 8088");
  });