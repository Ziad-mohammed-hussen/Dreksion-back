import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: [true, "Booking ID is required"]
    },
    amount: {
      type: Number,
      required: [true, "Payment amount is required"]
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "credit_card", "debit_card", "vodafone_cash", "instapay", "bank_transfer"],
      default: "credit_card"
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending"
    },
    transactionId: {
      type: String,
      trim: true
    },
    paidAt: {
      type: Date
    }
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
