import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    },
    phone: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      enum: ["student", "trainee", "instructor", "school_admin", "admin"],
      default: "trainee"
    },
    avatar: {
      type: String,
      default: ""
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male"
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
