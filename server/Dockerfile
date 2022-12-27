FROM node:16.9.0
WORKDIR /server
COPY . /server/

COPY ../tsconfig.json /server/
COPY ../common /server/common

RUN npm run compile

EXPOSE 3000

CMD npm start