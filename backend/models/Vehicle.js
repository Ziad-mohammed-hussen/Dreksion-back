import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: [true, "School ID is required"]
    },
    brand: {
      type: String,
      required: [true, "Vehicle brand is required"],
      trim: true
    },
    model: {
      type: String,
      required: [true, "Vehicle model is required"],
      trim: true
    },
    year: {
      type: Number
    },
    plateNumber: {
      type: String,
      required: [true, "Plate number is required"],
      trim: true
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      default: "automatic"
    },
    status: {
      type: String,
      enum: ["active", "maintenance", "inactive"],
      default: "active"
    }
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;
