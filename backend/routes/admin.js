import express from "express";
import User from "../models/User.js";
import { auth } from "../models/middleware/auth.js";

const router = express.Router();

router.get("/pending", auth(["admin"]), async (_, res) => {
  res.json(await User.find({ status: "pending" }));
});

router.post("/approve/:id", auth(["admin"]), async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.sendStatus(200);
});

export default router;