FROM node:20.17.0-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.17.0-slim AS final

WORKDIR /app

COPY --from=build /app/.next/ ./.next
COPY --from=build /app/public/ ./public
COPY --from=build /app/node_modules/ ./node_modules
COPY --from=build /app/package.json .

ENV HOST 0.0.0.0

EXPOSE 3000

CMD [ "npm" , "start" ]