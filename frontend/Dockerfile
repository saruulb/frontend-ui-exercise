#Pulling Base Image
FROM node:13.12.0-alpine

#Setting working DIR
WORKDIR /front


# add /app/node_modules/.bin to PATH 
ENV PATH "./node_modules/.bin:$PATH"

#Add app
COPY . .

RUN npm build

#Start App
CMD ["npm", "start"]
