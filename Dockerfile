FROM node:22-alpine
WORKDIR /api
COPY . . 
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
