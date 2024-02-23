FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
# COPY prisma ./prisma/
COPY . .

RUN apk update
RUN apk add
RUN apk add ffmpeg
RUN npm install --save mediaplex
# RUN npx prisma generate 


CMD ["npm", "run", "start"]
