FROM node:alpine as builder

WORKDIR /usr/apps

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build
EXPOSE 80
FROM nginx
COPY --from=builder /usr/apps/build /usr/share/nginx/html

