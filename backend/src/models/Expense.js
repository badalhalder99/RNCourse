import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);
