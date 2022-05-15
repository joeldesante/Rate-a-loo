FROM ubuntu:latest

# Create app directory
WORKDIR /usr/src/app

# Ignore APT warnings about not having a TTY
ENV DEBIAN_FRONTEND noninteractive

# dependencies
RUN \
  apt-get update && \
  apt-get -y install \
  build-essential \
  curl \
  git-core \
  libcurl4-openssl-dev \
  libc6-dev \
  libreadline-dev \
  libssl-dev \
  libxml2-dev \
  libxslt1-dev \
  libyaml-dev \
  zlib1g-dev

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

# Install Node.js
RUN apt-get install -y nodejs npm

RUN node --version

# SqLite
RUN apt-get -y install sqlite3 libsqlite3-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3030
CMD [ "npm", "start" ]