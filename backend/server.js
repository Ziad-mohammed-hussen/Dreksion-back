import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// استيراد الـ Models لضمان تسجيلها وإنشائها في MongoDB
import "./models/User.js";
import "./models/School.js";
import "./models/Instructor.js";
import "./models/Course.js";
import "./models/Vehicle.js";
import "./models/Package.js";
import "./models/Booking.js";
import "./models/DrivingSession.js";
import "./models/Payment.js";
import "./models/SelfAssessment.js";
import "./models/InstructorAssessment.js";
import "./models/Progress.js";
import "./models/Review.js";
import "./models/Test.js";
import "./models/Certificate.js";
import "./models/Notification.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dreksion_db";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running smoothly",
    data: {
      status: "healthy",
      database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
      timestamp: new Date().toISOString()
    }
  });
});

// دالة الاتصال بقاعدة البيانات وإنشاء الـ Collections تلقائياً لتظهر في Compass
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.name}`);
    console.log(` Database URL: ${MONGO_URI}`);

    // إنشاء الـ Collections تلقائياً لتظهر فوراً في MongoDB Compass
    const modelKeys = Object.keys(mongoose.models);
    for (const modelName of modelKeys) {
      await mongoose.models[modelName].createCollection();
    }
    console.log(` All (${modelKeys.length}) Collections created successfully in Compass!`);
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
  }
};

app.listen(PORT, async () => {
  console.log(` Server is running on port ${PORT}`);
  await connectDB();
});
