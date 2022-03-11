import express from "express";
import { SignIn, Signup } from "../controllers/user.controllers.js";

const router = express.Router();
router.post("/signup", Signup);

router.post("/signin", SignIn);

router.get("/current", (req, res) => {
  res.send(req.user);
});

export default router;
