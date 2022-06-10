FROM node:16
EXPOSE 3000
WORKDIR /home/node/app
COPY ./ /home/node/app/
RUN npm cache clean -f
RUN npm install
RUN npm run build
RUN npm install -g pm2
ENTRYPOINT [ "pm2-runtime", "start", "npm", "--name", "\"my-app\"", "--", "start"]