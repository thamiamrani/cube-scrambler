let express = require('express');
let express_graphql = require('express-graphql');
let {buildSchema} = require('graphql');
let {scrambleSchema} = require('./schemas/scrambleSchema');
let {root} = require('./handlers/scrambleHandler');
let {authentificator} = require('./handlers/authentificator');

let port = 8500

const app = express();

app.use('/scramble', authentificator, express_graphql(async (request, response) => ({
  schema: buildSchema(scrambleSchema),
  rootValue: root,
  graphiql: false
})));

app.listen(port, () => console.log('Express scrambler running on port : ' + port));