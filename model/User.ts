import { Schema, models, model } from "mongoose";

export enum userRole {
  admin = "admin",
  user = "user",
}

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    role: {
      type: String,
      default: userRole.user,
      required: true,
    },

    description: {
      type: String,
    },

    facebook: {
      type: String,
    },

    twitter: {
      type: String,
    },

    youtube: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    articles: {
      type: [Schema.Types.ObjectId],
      ref: "Article",
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
