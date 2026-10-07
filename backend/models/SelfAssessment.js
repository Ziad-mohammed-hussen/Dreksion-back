import mongoose from "mongoose";

const selfAssessmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"]
    },
    drivingExperience: {
      type: String,
      enum: ["none", "beginner", "some_experience"],
      default: "none"
    },
    confidenceLevel: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    goals: {
      type: [String],
      default: []
    },
    areasToImprove: {
      type: [String],
      default: []
    },
    notes: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const SelfAssessment = mongoose.model("SelfAssessment", selfAssessmentSchema);
export default SelfAssessment;
