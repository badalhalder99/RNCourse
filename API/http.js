const BACKEND_URL = "http://192.168.0.115:3005/api/expenses";

export async function fetchExpenses() {
  const response = await fetch(BACKEND_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }

  const data = await response.json();

  return data.map((item) => ({
    id: item._id,
    description: item.description,
    amount: item.amount,
    date: new Date(item.date),
  }));
}

export async function createExpense(expenseData) {
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    throw new Error("Failed to create expense");
  }

  const data = await response.json();

  return {
    id: data._id,
    description: data.description,
    amount: data.amount,
    date: new Date(data.date),
  };
}

export async function updateExpenseApi(id, expenseData) {
  const response = await fetch(`${BACKEND_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expenseData),
  });

  if (!response.ok) {
    throw new Error("Failed to update expense");
  }
}

export async function deleteExpenseApi(id) {
  const response = await fetch(`${BACKEND_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
}
