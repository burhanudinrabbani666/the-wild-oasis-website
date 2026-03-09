"use client";

import { useState } from "react";

export default function Counter({ user }) {
  // Send data from server to client
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {user.length} users</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
