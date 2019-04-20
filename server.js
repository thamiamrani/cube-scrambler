let express = require('express');
let express_graphql = require('express-graphql');
let {buildSchema} = require('graphql');
let {scrambleSchema} = require('./schemas/scrambleSchema');
let {scrambleHandler} = require('./handlers/scrambleHandler');

let port = 8500

const app = express();

app.use('/scramble', express_graphql(async (request, response) => ({
  schema: buildSchema(scrambleSchema),
  rootValue: await scrambleHandler(request, response),
  graphiql: false
})));

app.listen(port, () => console.log('Express scrambler running on port : ' + port));