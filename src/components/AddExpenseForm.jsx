import { useState } from "react";

export function AddExpenseForm({ addExpense }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category || !form.date) return;
    addExpense({ ...form, amount: Number(form.amount) });
    setForm({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 grid gap-3">
      <input
        className="border p-2 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        className="border p-2 rounded"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <input
        className="border p-2 rounded"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Expense
      </button>
    </form>
  );
}
