import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, default: "member" },
  status: { type: String, default: "pending" }
});

export default mongoose.model("User", UserSchema);