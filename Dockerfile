FROM node:8

RUN npm install -g yo generator-code

RUN useradd -m foo

USER foo
