FROM nginx:1.15.2-alpine

LABEL maintainer="dodero.andrea@gmail.com"

COPY ./docs /var/www

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]

# docker build -t dodorobot/image-name .
# docker container run -d -p 8080:8080 --rm --name frontend dodorobot/image-name