FROM node:17

COPY ./package.json /doumdattgi/
COPY ./yarn.lock /doumdattgi/
WORKDIR /doumdattgi/
RUN yarn install

COPY . /doumdattgi/

RUN yarn build
CMD yarn start