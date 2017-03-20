FROM node:7

MAINTAINER E.G. Galano <eleazar.galano@consensys.net>

EXPOSE 3000

ADD . /app
WORKDIR /app
RUN npm install
CMD npm start
