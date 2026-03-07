# Adding interactive client components

using `"use client"` in top of Components for make the server can use state.

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
