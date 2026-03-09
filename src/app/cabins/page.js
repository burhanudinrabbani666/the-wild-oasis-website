import Counter from "../components/Counter";

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
