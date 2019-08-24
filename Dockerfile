### STAGE 1: Build ###
FROM node:lts as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock
RUN yarn install
COPY . /usr/src/app
RUN yarn run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


