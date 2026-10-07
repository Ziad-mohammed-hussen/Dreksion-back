import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"]
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Instructor ID is required"]
    },
    completedSessions: {
      type: Number,
      default: 0
    },
    totalSessions: {
      type: Number,
      default: 10
    },
    currentStage: {
      type: String,
      enum: ["basic_controls", "road_driving", "parking", "highway", "test_preparation", "ready_for_license"],
      default: "basic_controls"
    },
    masteredSkills: {
      type: [String],
      default: []
    },
    skillsInProgress: {
      type: [String],
      default: []
    },
    completionPercentage: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    }
  },
  { timestamps: true }
);

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;
