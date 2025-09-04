FROM node:18-alpine

WORKDIR /usr/src/app

COPY *.json ./

RUN npm install

EXPOSE 4000

CMD ["npm run start:dev posts"]