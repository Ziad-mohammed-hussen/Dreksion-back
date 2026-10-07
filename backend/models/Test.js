import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"]
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course ID is required"]
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor"
    },
    testType: {
      type: String,
      enum: ["theory", "practical", "parking", "road_test"],
      required: [true, "Test type is required"]
    },
    score: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    status: {
      type: String,
      enum: ["scheduled", "passed", "failed", "cancelled"],
      default: "scheduled"
    },
    testDate: {
      type: Date,
      required: [true, "Test date is required"]
    },
    feedback: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const Test = mongoose.model("Test", testSchema);
export default Test;
