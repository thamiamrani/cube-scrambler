var scrambler = require('./cubeScrambler');
var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

const port = 8500
// GraphQl Schema
var schema = buildSchema(`
    type Query {
        scramble: String
    }
`);

var root = {
    scramble: () => scrambler.scrambler(3)
};

var app = express();
app.use('/scramble', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => console.log('Express scrambler running on port : ' + port));