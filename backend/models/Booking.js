import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
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
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor"
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    },
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle"
    },
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package"
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "in_progress", "completed", "cancelled"],
      default: "pending"
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    notes: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
