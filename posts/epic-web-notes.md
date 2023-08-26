---
title: "Epic web workshop notes"
date: "2023-08-26"
label: "Web"
---

## Styling

Load css file

```
<link rel="stylesheet" href="styles.css" />
```

Load favicon icon

```
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## in Remix

```
import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'

export const links: LinksFunction = () => {
	return [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
            <body>
				<p>Hello World</p>
            </body>
        </html>
    )
}
```

if we want that the favicon download it only when it changes, we need to
move the favicon.svg from `public/favicon.svg` to `app/assets/favicon.svg`

```
import faviconAssetUrl from './assets/favicon.svg'

export const links: LinksFunction = () => {
	return [{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl }]
}

```

Add global styles

```
import faviconAssetUrl from './assets/favicon.svg'
import fontStylestylesheetUrl from './styles/font.css'

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'stylesheet', href: fontStylestylesheetUrl },
	]
}
```

## Routing

[What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)

Example of a URL:
`http://www.example.com/path/to/myfile.html?key1=value1&key2=value2#Id`

follow this pattern:

`scheem://domain-name/path-to-file?parameters#anchor`

As you can tell, there's a bit of an unfortunate term overload in web development. "parameters" in the diagram above refers to the part of the URL after the ?. But we also just talked about "route parameters." And then of course there are "function parameters." All of these serve a similar purpose. To avoid confusion, we typically call "route parameters" simply "params" and the bit after the ? is often called "query params" or "search params."

To navigate we use anchor tag `<a>`

```
<a href="/users/123">User Profile</a>
```

But we can also use forms to navigate to other pages

```
<form action="/users/search" method="GET">
	<input type="text" name="q" />
	<button type="submit">Search</button>
</form>
```

This will take the value of the input and add it to the URL as a query param (?q=...). The method attribute tells the browser to use the GET HTTP method when submitting the form. We'll get into forms more in a later exercise.

## Using routes in Remix

We can either put it in `routes/users.kody.tsx` or `routes/users+/kody.tsx`.
Let's talk about what these special characters mean for remix-flat-routes. The `.` in `users.kody` tells remix-flat-routes to separate the users and kody by a `/`. So users.kody becomes `users/kody`. The `+` in `users+/kody` does the same thing, except it allows you to use a folder instead of an extra-long filename. That's the only difference.
In this case, because we know we're going to have several routes under the /users path, I think it makes the most sense to use the `users+/` directory approach.

#### URL nested vs Layout nested

if a component is URL Nested but not Layout Nested we'll need to add an underscore to the filename

```
routes
|users+
|   kody.tsx
|   kody_+
|       notes.index.tsx
|       notes.some-notes-id.txs
```

### Route Params

With the file-based route convention we're using, we define params by using a $-prefixed filename segment.

`app/routes/ships.$shipId.tsx` --> params: shipId --> /ships/1234

To get the params you can use useParams from Remix

```
import { useParams } from '@remix-run/react'

export default function PetRoute() {
	const params = useParams()
	return <h1>Hello {params.petName}</h1>
}
```

### Fetching Data

When a user goes to a URL, the browser makes a request to the server. The server then sends back a response, which is usually HTML. The browser then renders the HTML into a page. The HTML can contain references to other resources, such as images, CSS, and JavaScript. The browser will make requests for these resources and process them as well.
That initial request for HTML normally comes with all the information the user expects to see. However, users of modern web applications expect to be able to interact with the page without reloading it. So, to keep the data that's on the page up-to-date as the user makes changes and navigates around, the application also needs to make requests to the server for data. Around 2006, a new technology was developed for this purpose called **AJAX**. AJAX stands for _Asynchronous JavaScript and XML_. It's a way of making requests to the server without reloading the page.
These days, web applications typically use a newer web standard called **fetch**. Among other things, this API allows the browser to make requests to a server without triggering a full page refresh. There are various parts to this API, but two critical objects are called `Request` and `Response`.

We can use this API to make requests to our servers to get data. Normally, a request for data will return a JSON object which is a string that looks like a JavaScript object. We can use the JSON.parse function to convert this string into a JavaScript object, but this is so common, that the fetch Response object has a special method (called .json()) to parse the JSON response for us.
