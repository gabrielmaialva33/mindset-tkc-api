FROM library/postgres
COPY ./init.sql /docker-entrypoint-initdb.d/

# Build AdonisJS
FROM node:lts-alpine as builder
# Set directory for all files
WORKDIR /home/api
# Copy over package.json files
COPY package*.json ./
# Absence of Python library.
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
# Install all packages
RUN yarn
# Copy over source code
COPY . .
# Build AdonisJS for production
RUN yarn build

# Build final runtime container
FROM node:lts-alpine
# Set environment variables
ENV NODE_ENV=development
# Set home dir
WORKDIR /home/base_rbac_api
# Copy over built files
COPY --from=builder /home/api/build .
# Absence of Python library.
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
# Install only required packages
RUN rm -rf node_modules && yarn install --frozen-lockfile --production
# Expose port to outside world
EXPOSE 3333
# Start server up
CMD [ "yarn", "docker:server" ]
