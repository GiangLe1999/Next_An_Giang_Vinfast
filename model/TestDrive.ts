import mongoose from "mongoose";

const TestDriveSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      require: true,
      trim: true,
    },

    carName: {
      type: String,
      required: true,
    },

    carLine: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },

    status: {
      type: String,
      default: "Chờ xử lý",
    },
  },
  { timestamps: true }
);

const TestDrive =
  mongoose.models?.TestDrive || mongoose.model("TestDrive", TestDriveSchema);

export default TestDrive;
