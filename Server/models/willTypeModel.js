import mongoose from "mongoose";

const willTypeSchema = mongoose.Schema(
  {
    willTypeName: {
      type: String,
    },
    willTypeID: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const WillType = mongoose.model("willTypes", willTypeSchema);
