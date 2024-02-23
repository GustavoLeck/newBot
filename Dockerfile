FROM node:20-alpine
FROM katalonstudio/katalon

WORKDIR /usr/app

COPY ./package.json .
COPY prisma ./prisma/
COPY . .

RUN npm i
RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN npx prisma generate 


CMD ["npm", "run", "start"]
