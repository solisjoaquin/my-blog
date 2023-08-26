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
