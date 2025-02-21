import { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
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
    car: {
      type: String,
    },
    carLine: {
      type: String,
    },
    service: {
      type: String,
      required: true,
    },
    province: {
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

ContactSchema.index({ name: "text", phone: "text", email: "text" });

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
