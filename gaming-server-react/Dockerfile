FROM node:lts-alpine as builder

WORKDIR /app
COPY ./Playhost-Cra .
RUN rm -rf node_modules && yarn
RUN yarn run build

FROM nginx:1.25.5-alpine
COPY --chown=nginx:nginx Playhost-Cra/nginx-ui.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /app/build /var/www/html/