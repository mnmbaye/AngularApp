FROM node:8.9.4

MAINTAINER mbayndiayembaye@gmail.com

WORKDIR /app

COPY angular.json ./

COPY tsconfig.json ./

COPY tslint.json ./

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY src/ src/

RUN npm run-script build



FROM nginx:1.15.7

COPY /dist/AngularApp /usr/share/nginx/html/

COPY config/default.conf /etc/nginx/conf.d/default.conf

COPY config/nginx-run.sh nginx-run.sh

EXPOSE 80

CMD nginx -g "daemon off;"
