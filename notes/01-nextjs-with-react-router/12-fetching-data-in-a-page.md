# Fetching data in a page

```jsx
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map((user) => {
          return <li key={user.name}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
```

Next: [Adding interactive client components](./14-adding-interactive-client-components.md)
