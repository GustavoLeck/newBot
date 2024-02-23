FROM node:20-alpine
FROM katalonstudio/katalon

WORKDIR /usr/app

COPY ./package.json .
COPY prisma ./prisma/
COPY . .

RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN npm i
RUN npx prisma generate 
RUN npm run test


CMD ["npm", "run", "start"]
