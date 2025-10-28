// MyComponent.jsx
import React from "react";
import {useMyHook} from "../hooks/useMyHook.jsx";

export const CustomHook = () => {
  // pass both counter initial value and API URL
  const {
    count,
    increment,
    decrement,
    reset,
    data,
    loading,
    error,
  } = useMyHook(5, "https://jsonplaceholder.typicode.com/users");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎯 Combined Custom Hook Example</h2>

      {/* Counter Section */}
      <h3>Counter: {count}</h3>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>

      <hr style={{ margin: "20px 0" }} />

      {/* API Data Section */}
      <h3>Fetched Users:</h3>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} — <small>{user.email}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
