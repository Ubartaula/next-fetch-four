import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || model("User", userSchema);

export default User;
