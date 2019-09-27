FROM node:12

RUN apt-get update && apt-get install -y git 

EXPOSE 80

WORKDIR /node

COPY node /node

WORKDIR /node
RUN npm i --production && rm -rf /root/.npm /usr/local/share/.cache /root/.cache

CMD npm start