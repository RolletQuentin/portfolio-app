FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# to solve the problem for the i18n dependance
RUN sed -i 's/MessageFunctionInternal/MessageFunctionReturn/g' node_modules/@intlify/core-base/dist/core-base.d.ts

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 3000
CMD [ "http-server", "dist" ]
