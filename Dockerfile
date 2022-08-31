FROM node:16
EXPOSE 3000

WORKDIR /home/node/app
COPY ./ /home/node/app/

ENV CLIENT_URL http://15.164.89.188
ENV SERVER_URL http://15.164.89.188:8080/
ENV DESTINATION_URL http://15.164.89.188:8080/:path*
ENV SOURCE_PATH /:path*

RUN npm cache clean -f
RUN npm install
RUN npm run build
RUN npm install -g pm2
ENTRYPOINT [ "pm2-runtime", "start", "npm", "--name", "\"my-app\"", "--", "start"]
