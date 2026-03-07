# Displaying a loading indicator

for displaying loading we just need to create `loading.js` in the root of `/app` directory

```js
/*

├── favicon.ico
├── globals.css
├── layout.js
├── loading.js
└── page.js

*/

export default function Loading() {
  return <p>Loading data...</p>;
}
```

Next: [React Server Components](./16-rsc-2.md)
