# stephengrider-k8-docker-react

Follow Udemy tutorial from Stephen Grider (Docker and Kubernetes)

## Steps for generating React App

```bash
# generate react app
npx create-react-app stephengrider-k8-docker-react
```

## Steps for running Dockerfile on local

```bash
# build Dockerfile.dev
docker build -f Dockerfile.dev -t sorakhomr/stephengrider-k8-docker-react .
# run
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app sorakhomr/stephengrider-k8-docker-react
# test
docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app sorakhomr/stephengrider-k8-docker-react npm run test
```

## Steps for running docker-compose on local

```bash
# run docker-compose with build
docker-compose -f docker-compose-dev.yml up --build
# down docker-compose containers
docker-compose -f docker-compose-dev.yml down
# run test
docker exec -it stephengrider-k8-docker-react-web-1 npm run test
```
