FROM node:20

WORKDIR /frontend/src/App

COPY . .

RUN npm install

ENV PORT 3000

CMD ["npm", "start"]

EXPOSE 3000