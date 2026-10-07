import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School ID is required"]
    },
    title: {
      type: String,
      required: [true, "Package title is required"],
      trim: true
    },
    description: {
      type: String,
      default: ""
    },
    totalSessions: {
      type: Number,
      required: [true, "Total sessions count is required"],
      default: 10
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      default: 0
    },
    features: {
      type: [String],
      default: []
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
