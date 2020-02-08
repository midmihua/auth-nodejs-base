## auth-node-base

### curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "name":"test", "password":"secret", "passwordConfirmation":"secret"}'
```

```sh
curl -X POST localhost:3000/register --cookie 'sid=s%3AQYM9ymn1LfSCCN5IlkiQK0ejKxPAoIDR.G6cB9bRyGZuv4Pcbu1jQK2F%2BwsS56trwBQ5DPB0sELo'
```

```sh
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' \
    -d '{"email":"test@gmail.com", "password":"secret"}'
```

```sh
curl -X POST localhost:3000/login -H 'Content-Type: application/json' \
    --cookie 'sid=s%3AIKPT-mzB46OROLG-JlvI_xVG3OpXz_OS.OzJfwCPXcG7TPQE5K1TfG%2BitHID4NJCiEeyI7nbPw68'
```

```sh
curl -X POST localhost:3000/logout -H 'Content-Type: application/json' \
    --cookie 'sid=s%3AIKPT-mzB46OROLG-JlvI_xVG3OpXz_OS.OzJfwCPXcG7TPQE5K1TfG%2BitHID4NJCiEeyI7nbPw68'
```

### docker

```sh
sudo docker exec -it auth-nodejs-base_db_1 mongo -u admin -p secret auth-base
```

### redis

```sh
sudo docker exec -it auth-nodejs-base_cache_1 redis-cli -a secret
```