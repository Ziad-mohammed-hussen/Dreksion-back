import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      unique: true
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School ID is required"]
    },
    licenseNumber: {
      type: String,
      trim: true
    },
    experienceYears: {
      type: Number,
      default: 0
    },
    bio: {
      type: String,
      default: ""
    },
    specialization: {
      type: [String],
      default: []
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Instructor = mongoose.model("Instructor", instructorSchema);
export default Instructor;
