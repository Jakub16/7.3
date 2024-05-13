docker image build -t flask/flask-service flask
docker image build -t database database
docker image build -t express/express-service express

docker container run --rm -d \
    --name database \
    database

docker container run --rm -d \
    --name express \
    --label traefik.enable=true \
    --label traefik.port=3000 \
    --label traefik.http.routers.express.rule="Host(\"test\")" \
    express/express-service

docker container run --rm -d \
    --name flask \
    --label traefik.enable=true \
    --label traefik.port=5000 \
    --label traefik.http.routers.flask.rule="Host(\"localhost\")" \
    flask/flask-service
