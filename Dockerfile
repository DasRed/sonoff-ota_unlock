FROM node:20-alpine

EXPOSE 9082
WORKDIR /var/www

RUN mkdir -p /var/www/src
COPY ./src /var/www/src
COPY ./package.json /var/www/package.json
COPY ./package-lock.json /var/www/package-lock.json

ENV NODE_ENV production

HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost/healthcheck || exit 1

RUN npm install --omit-dev
CMD npm start

