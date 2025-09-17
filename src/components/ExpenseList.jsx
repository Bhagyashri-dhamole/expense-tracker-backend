export function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Expenses</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp._id} className="border-b text-center">
              <td className="p-2">{exp.title}</td>
              <td className="p-2">₹{exp.amount}</td>
              <td className="p-2">{exp.category}</td>
              <td className="p-2">{new Date(exp.date).toLocaleDateString()}</td>
              <td className="p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteExpense(exp._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {expenses.length === 0 && (
            <tr>
              <td colSpan="5" className="p-3 text-gray-500">
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
