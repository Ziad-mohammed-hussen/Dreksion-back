import mongoose from "mongoose";

const instructorAssessmentSchema = new mongoose.Schema(
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
    steeringControl: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    speedControl: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    trafficRulesAwareness: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    parkingSkills: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    overallScore: {
      type: Number,
      min: 1,
      max: 10,
      default: 5
    },
    recommendations: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const InstructorAssessment = mongoose.model("InstructorAssessment", instructorAssessmentSchema);
export default InstructorAssessment;
