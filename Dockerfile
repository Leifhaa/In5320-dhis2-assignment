# syntax=docker/dockerfile:1

FROM node:14.17.0
ENV NODE_ENV=production

WORKDIR /app

RUN npm install --production
RUN yarn global add @dhis2/cli

