import Expense from "../models/Expense.js";

/**
 * @desc    Get all expenses
 * @route   GET /api/expenses
 */
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Create expense
 * @route   POST /api/expenses
 */
export const createExpense = async (req, res) => {
  try {
    const { description, amount, date } = req.body;

    const expense = await Expense.create({
      description,
      amount,
      date
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Update expense
 * @route   PUT /api/expenses/:id
 */
export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Delete expense
 * @route   DELETE /api/expenses/:id
 */
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
