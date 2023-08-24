---
title: "Beneficios de usar Server-Side Rendering (SSR)"
date: "2023-08-24"
label: "Web"
---

Cuando un sitio web usa Server-side Rendering, la pagina HTML es generada en cada request. Este tipo de pre-renderizado trae algunos beneficios:

# Aumentar la velocidad de carga inicial

Esto se ve mas cuando cargamos un sitio y tenemos un internet lento.
El SSR nos permite no esperar hasta que se descargue el archivo JavaScript y lo ejecute para mostrar el sitio. A esto se suma que el fetching de datos se hace del lado del servidor, donde se tiene una conexion mas rapida a la base de datos que del cliente. Esta mejora en la carga inicial mejora la experiencia del usuario.

# SEO

Los crawlers que usan los motores de busqueda, van a ver el sitio ya renderizado.

## Bonus: Static Site Generation (SSG)

Algunos frameworks como Next JS utilizan SSR como opcion de pre-renderizado. Otro metodo de pre-renderizado es el de **Static Generation**, es decir el HTML es generado al momento del **build** y será utilizado en cada request.

Lo recomendable es usar SSR solo cuando sea necesario, es decir cuando el tiempo de carga o el SEO sea algo critico.
