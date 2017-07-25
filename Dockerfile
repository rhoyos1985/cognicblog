FROM node:8.1.3
MAINTAINER Richard Hoyos <ricbaquero@gmail.com>
EXPOSE 3000

RUN apt-get install -y curl
RUN curl https://install.meteor.com | /bin/sh
RUN meteor update

WORKDIR /app

ADD . /app
RUN meteor npm install

CMD [ "meteor" ]
