FROM node:alpine

WORKDIR /var/app

ENV MONGODB_URI="mongodb://mymongo:27017/xmemedatabase"

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]