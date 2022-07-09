FROM node:16-alpine3.13

WORKDIR /app

COPY ./src ./src

COPY index.html \
  tsconfig.json \
  tsconfig.node.json \
  package.json \
  package-lock.json \
  vite.config.ts \
  ./

RUN npm ci

CMD npm run dev