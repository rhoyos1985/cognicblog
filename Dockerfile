FROM node:latest
EXPOSE 3000

RUN curl https://install.meteor.com/ | sh
RUN meteor update

WORKDIR /app

ADD . /app
RUN meteor npm install

CMD [ "meteor" ]
