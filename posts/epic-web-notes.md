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

routes ** users+
|** kody.tsx
|** kody\_+
|** notes.index.tsx
|\_\_ notes.some-notes-id.txs

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
