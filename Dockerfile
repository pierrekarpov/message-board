FROM node:14
WORKDIR /message-board
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev