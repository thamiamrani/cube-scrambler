# Cube-scrambler-API
GraphQL Api Cube Scrambler

This is a barebone NodeJS [graphQL](https://github.com/graphql/express-graphql) API, with only one route that give a scramble of a Rubik's cube given a succesful authentification.

## Run
```javascript
npm install
npm start
```
## Routes
`http://127.0.0.1:8500/scramble`

Headers : `x-password: *******`

The password is read from the value of environement variable : `SCRAMBLER_PASSWWORD`
