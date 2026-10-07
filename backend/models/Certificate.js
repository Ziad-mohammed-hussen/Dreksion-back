import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"]
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School ID is required"]
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course ID is required"]
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: [true, "Instructor ID is required"]
    },
    certificateNumber: {
      type: String,
      required: [true, "Certificate number is required"],
      unique: true,
      trim: true
    },
    issueDate: {
      type: Date,
      default: Date.now
    },
    grade: {
      type: String,
      enum: ["pass", "merit", "distinction"],
      default: "pass"
    },
    fileUrl: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", certificateSchema);
export default Certificate;
