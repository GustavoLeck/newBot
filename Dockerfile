FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN apk update
RUN apk add
RUN apk add ffmpeg
RUN npm i
RUN npx prisma generate 


CMD ["npm", "run", "start"]
