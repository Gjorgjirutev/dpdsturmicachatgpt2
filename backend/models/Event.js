import mongoose from "mongoose";

export default mongoose.model("Event", new mongoose.Schema({
  type: String,
  description: String,
  lat: Number,
  lng: Number,
  createdBy: String,
  status: { type: String, default: "active" },
  createdAt: { type: Date, default: Date.now }
}));