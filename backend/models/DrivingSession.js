import mongoose from "mongoose";

const drivingSessionSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: [true, "Booking ID is required"]
    },
    sessionNumber: {
      type: Number,
      required: true,
      default: 1
    },
    scheduledDate: {
      type: Date,
      required: [true, "Scheduled date is required"]
    },
    durationMinutes: {
      type: Number,
      default: 60
    },
    status: {
      type: String,
      enum: ["scheduled", "in_progress", "completed", "cancelled", "missed"],
      default: "scheduled"
    },
    traineeFeedback: {
      type: String,
      default: ""
    },
    instructorNotes: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const DrivingSession = mongoose.model("DrivingSession", drivingSessionSchema);
export default DrivingSession;
