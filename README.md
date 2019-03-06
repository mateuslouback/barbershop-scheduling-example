# Application of appointment template for barbershop

Application of scheduling template for barbershop using NodeJS, PostgreSQL and Nunjucks as template engine.

![](https://media.giphy.com/media/1wrlkILYpw65VDMwPo/giphy.gif)

## Create a PostgreSQL database using docker

Install Docker (https://www.docker.com)

Run terminal code

```
$ docker run --name database -p 5432:5432 -d -t kartoza/postgis
```

Create database named _gobarber_

## Package installation

Install Yarn:
Open (https://yarnpkg.com/).

In the project folder run the terminal code

```
$ yarn install
```

## Run Migrate

In the project folder run the terminal code

```
$  npx sequelize db:migrate
```

## Run server node

In the project folder run the terminal code

```
$ yarn start
```
