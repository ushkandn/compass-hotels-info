FROM node:18
WORKDIR /usr/src/app/server
COPY ./package.json .
RUN npm install
EXPOSE 80
COPY . .
CMD ["npm", "run", "prod:start"]    