FROM node:8.1.3

MAINTAINER Richard Hoyos <ricbaquero@gmail.com>

EXPOSE 3000

WORKDIR /app

ADD package.json /app
RUN npm install

CMD [ "meteor" ]
