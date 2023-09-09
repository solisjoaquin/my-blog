---
title: "React Server Components Notes"
date: "2023-09-09"
label: "Web"
---

React introduced the concept of "Zero-Bundle-Size React Server Components" in 2020.

[FreeCodeCamp](https://www.freecodecamp.org/news/how-to-use-react-server-components/)

### Limitation of RSC

- They don't have anything that is related to the client-side. This means that you can't add any user interactivity to the server components. For example, you can't use any event handlers or React hooks like useState, useReducer, useEffect in your server components.

- You can not use Browser Web APIs like localstorage, bluetooth, web USB, and so on in server components.

- For everything that's related to client interactions, you must continue to use client components.

### We can use server and client in the same app

**important** Server components can import and render client components, but client components can't render the server components in it. If you want to use a server component in a client component, you can pass it as props and use it that way.

### SSR vs RSC

With Server Side Rendering, we send the raw HTML from the server to the client, then all the client side JavaScript gets downloaded. React starts the Hydration process to transform the HTML to an interactive React component. In SSR the component doesn't stay on the server.

## Server Components in NextJS

[NextJS Docs](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

Server Components allow you to write UI that can be rendered and optionally cached on the server.

Next.js uses React's APIs to orchestrate rendering. The rendering work is split into chunks: by individual route segments and Suspense Boundaries.

Each chunk is rendered in two steps:

1. React renders Server Components into a special data format called the React Server Component Payload (RSC Payload).
2. Next.js uses the RSC Payload and Client Component JavaScript instructions to render HTML on the server.

Then, on the client:

1. The HTML is used to immediately show a fast non-interactive preview of the route - this is for the initial page load only.
2. The React Server Components Payload is used to reconcile the Client and Server Component trees, and update the DOM.
3. The JavaScript instructions are used to hydrate Client Components and make the application interactive.

NextJS strategies for server rendering

- Static Rendering
- Dynamic Rendering
- Streaming

Benefits:

- Data fetching
- Security
- Caching
- Bundle Sizes
- Inicial Page Load and First Contentful Paint
- SEO
- Streaming
