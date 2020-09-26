FROM node:12

WORKDIR /usr/src/nodeapp

COPY package*json ./
RUN npm install
COPY . .
EXPOSE 3500
CMD ["node", "app/server.js"]