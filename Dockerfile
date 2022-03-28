FROM mhart/alpine-node:12
MAINTAINER server@3sidedcube.com

ENV NAME gfw-ts-test

RUN apk update && apk upgrade && \
    apk add --no-cache --update bash git openssh python build-base

RUN mkdir -p /opt/$NAME
COPY package.json /opt/$NAME/package.json
COPY yarn.lock /opt/$NAME/yarn.lock
# COPY .eslintrc /opt/$NAME/.eslintrc
RUN cd /opt/$NAME && yarn

# COPY config /opt/$NAME/config

WORKDIR /opt/$NAME

COPY ./app /opt/$NAME/app
COPY ./.babelrc /opt/$NAME/.babelrc
COPY ./tsconfig.json /opt/$NAME/tsconfig.json
RUN yarn build

# Tell Docker we are going to use this port
EXPOSE 4401

CMD ["node", "dist/app.js"]