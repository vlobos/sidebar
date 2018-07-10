FROM node:10
RUN mkdir /sidebar-service
WORKDIR  /sidebar-service
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["npm", "start"]