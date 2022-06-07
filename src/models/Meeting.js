import mongoose from "mongoose";

export const Meeting = mongoose.model("Meeting", {
  title: String,
  description: String,
  detail: String,
});
