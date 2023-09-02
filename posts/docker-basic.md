---
title: "Basic Docker"
date: "2023-06-26"
label: "Devops"
---

## Docker image

Example of a node image

```
FROM node:14

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]
```

Build image in the same directory using Dockerfile

```
docker build -t nameOfImage .
```

Create docker network

```
docker network create --attachable nameOfNetwork
```

Connect container to network

```
docker network connect nameofNetwork containerName
```

Run container with ENV variable

```
docker run -d --name nameOfContainer -p 3000:3000 --env ENV_VARIABLE=valueOfVariable imageName
```

## Docker Compose

name: docker-compose.yml

```
version: "1.0"

services:
    app:
        build: .
        environment:
            ENV_NAME: ""
        depends_on:
            - db
        ports:
            - "3000:3000"
    db:
        image: nameImage2


```

Run docker compose without kill services after close terminal

```
docker-compose up -d

```
