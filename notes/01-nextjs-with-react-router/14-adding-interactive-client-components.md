# Adding interactive client components

using `"use client"` in top of Components for make the server can use state.

```js
export default async function Page() {
  // Fetching data in Components immidiatly
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div className="mt-10 ml-7">
      <h1>Cabins Pages</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Send Data from server to client with props */}
      <Counter user={data} />
    </div>
  );
}
```

```js
"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>There are {users.length} users</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Current: {count}
      </button>
    </div>
  );
}
```

Next: [Displaying a loading indicator](./15-displaying-a-loading-indicator.md)
