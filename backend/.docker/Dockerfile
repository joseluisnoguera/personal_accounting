FROM node:16-alpine3.13

WORKDIR /app

COPY ./src ./src
COPY nest-cli.json \
  tsconfig.build.json \
  tsconfig.json \
  package.json \
  package-lock.json \
  .env \
  ./

RUN npm ci

CMD npm run start:dev