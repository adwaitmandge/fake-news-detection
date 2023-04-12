const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
    },
    queries: [
      {
        query: {
          type: String,
        },
        result: {
          type: Boolean,
        },
        categories: [
          {
            type: String,
          },
        ],
        categories: [
          {
            type: String,
          },
        ],
      },
    ],
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
