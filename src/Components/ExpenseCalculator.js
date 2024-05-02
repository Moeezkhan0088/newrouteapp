import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext"; 

const ExpenseCalculator = () => {
  const { incomeList, saveData } = useContext(GlobalContext); 
  const [description, setDescription] = useState(""); 
  const [amount, setAmount] = useState(0); 
  

  const handleAddExpense = () => {
    saveData({ description, amount });
    setDescription(""); 
    setAmount(0); 
  };

  return (
    <div>
      <h2>Expense Calculator</h2>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <h3>Income List</h3>
      <ul>
        {incomeList.map((item, index) => (
          <li key={index}>
            {item.description}: ${item.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCalculator;
