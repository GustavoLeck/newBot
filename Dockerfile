FROM katalonstudio/katalon

WORKDIR /usr/app

COPY ./package.json .
COPY prisma ./prisma/
COPY . .

RUN apt-get -y update
RUN apt-get install -y ffmpeg
RUN apt-get install -y node
RUN npm i

RUN npx prisma generate 


CMD ["npm", "run", "start"]
