FROM node:12.16.1-alpine3.11 as builder
ARG env=production
RUN apk update && apk add --no-cache make git
WORKDIR /app
COPY package-lock.json .
COPY package.json  .
RUN npm install -g @vue/cli
RUN npm install
COPY . .
RUN npm run build


FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
