import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
      },
      imageUri: {
         type: String,
         required: true,
      },
      location: {
         lat: { type: Number, required: true },
         lng: { type: Number, required: true },
      },
   },
   { timestamps: true }
);

export default mongoose.model("Place", placeSchema);
