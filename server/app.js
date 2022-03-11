console.clear();
// ******************************************************

import express from "express";
import connectDB from "./config/DBconnect.js";
import routerUser from "./router/user.js";
import routerDemand from "./router/demand.js";

import dotenv from "dotenv";

// ********************************************************

const app = express();
dotenv.config();
// connect DB
connectDB();
// middleware global
app.use(express.json());

// ***************************************************
// router
app.use("/api/user", routerUser);

app.use("/api/demand", routerDemand);

const PORT = process.env.PORT || 6000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);
