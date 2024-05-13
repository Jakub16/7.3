FROM mysql:8.4.0

ENV MYSQL_DATABASE=project \
    MYSQL_ROOT_PASSWORD=test

ADD init.sql /docker-entrypoint-initdb.d

EXPOSE 3306