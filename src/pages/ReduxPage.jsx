// src/components/Counter.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../store/counterSlice";

export const ReduxPage = ()=> {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>🔢 Redux Toolkit Counter</h2>
      <h3>Count: {count}</h3>

      <div style={{ margin: "10px" }}>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
      </div>

      <div style={{ marginTop: "15px" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter number"
          style={{ width: "120px", textAlign: "center" }}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}
