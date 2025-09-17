export function Summary({ expenses }) {
  const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  const byCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Summary</h2>
      <p className="font-bold">Total Spent: ₹{total}</p>
      <ul className="list-disc ml-6 mt-2">
        {Object.entries(byCategory).map(([cat, amt]) => (
          <li key={cat}>
            {cat}: ₹{amt}
          </li>
        ))}
      </ul>
    </div>
  );
}
