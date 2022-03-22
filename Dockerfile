FROM node:16-alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY public .
COPY src .

RUN npm run build

FROM nginx


