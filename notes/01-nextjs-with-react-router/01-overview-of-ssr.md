# Overview of Serve Side Rendering

## CLIENT-SIDE RENDERING (CSR) VS. SERVER-SIDE RENDERING (SSR)

### CLIENT-SIDE RENDERING

- 👉 HTML is rendered on the client (the user’s computer) using JavaScript
- 👎 Slower initial page loads:
- 👉 Bigger JavaScript bundle needs to be downloaded before app starts running
- 👉 Data is fetched after components mount
- 👍 Highly interactive: All the code and content has already been loaded (except data)
- 👎 SEO can be problematic

### SERVER-SIDE RENDERING: NEXT.js

- 👉 HTML is rendered on the server (the developer’s computer)
- 👍 Faster initial page loads:
- 👉 Less JavaScript needs to be downloaded and executed
- 👉 Data is fetched before HTML is rendered
- 👎 Less interactive: Pages might be downloaded on demand and require full page reloads
- 👍 SEO-friendly: Content is easier for search engines to index

## WHEN TO USE CSR AND SSR?

### CLIENT-SIDE RENDERING

- 👉 SPAs: Perfect for building highly interactive web apps
- 👉 Apps that don’t need SEO
  - 👉 Apps that are used “internally” as tools inside companies
  - 👉 Apps that are entirely hidden behind a login

### SERVER-SIDE RENDERING: NEXT.js

- 👉 Content-driven websites or apps where SEO is essential: E-commerce, blogs, news, marketing websites, etc.

**TWO TYPES OF SSR**

1. **Static:** HTML generated at build time (often called Static Site Generation, or SSG)
2. **Dynamic:** HTML generated each time server receives new request (some call only this SSR)
