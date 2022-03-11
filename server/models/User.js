// file is uppercase in models
import mongoose from "mongoose";

const { Schema, model } = mongoose;

let userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});
userSchema = model("user", userSchema);
export default userSchema;
