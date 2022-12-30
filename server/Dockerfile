FROM node:16.9.0

COPY common/ /common/

WORKDIR /server
COPY server .

RUN npm i
RUN npm run compile

EXPOSE 8000

CMD npm start