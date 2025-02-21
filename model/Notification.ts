import { Schema, models, model } from "mongoose";

const notificationSchema = new Schema(
  {
    detail: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
    service: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    carName: {
      type: String,
    },
    province: {
      type: String,
    },
    carLine: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Notification =
  models?.Notification || model("Notification", notificationSchema);

export default Notification;
