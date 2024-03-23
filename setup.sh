mkdir db
apt install postgresql
pg_ctl initdb -D ./db
pg_ctl -D ./db start
psql postgres -c "CREATE USER dbuser WITH PASSWORD 'password' SUPERUSER;"
psql postgres -c "CREATE TABLE users (id BIGSERIAL,email VARCHAR(30),name VARCHAR(30),password TEXT);"
pg_ctl -D ./db stop
npm install
npm i nodemon -g
