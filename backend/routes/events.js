import express from "express";
import Event from "../models/Event.js";
import { auth } from "../models/middleware/auth.js";

const router = express.Router();

// GET all events
router.get("/", auth(), async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// CREATE event
router.post("/", auth(), async (req, res) => {
  const event = await Event.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.status(201).json(event);
});

export default router;