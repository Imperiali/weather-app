FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY ./express .

EXPOSE 3000
CMD [ "node", "server.js" ]
