import express from "express";
import { addDemand, allDemand } from "../controllers/demand.controllers.js";

const router = express.Router();

router.post("/newdemand", addDemand);

router.get("/alldemand", allDemand);

export default router;
