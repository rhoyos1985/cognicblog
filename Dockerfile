FROM node:8.1.3
EXPOSE 3000

RUN curl https://install.meteor.com | /bin/sh
RUN npm install

WORKDIR /app

ADD . /app
RUN git submodule update --init

CMD [ "meteor" ]
