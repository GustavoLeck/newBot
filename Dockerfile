FROM node:20-alpine

WORKDIR /usr/app

COPY ./package.json .
COPY prisma ./prisma/
COPY . .

RUN npm i
RUN npx prisma generate 
RUN npm run test

CMD ["npm", "run", "start"]
