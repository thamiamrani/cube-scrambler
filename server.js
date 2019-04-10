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
    scramble: () => scrambler.scrambler(3, req)
};

var app = express();
app.use('/scramble',(req, res) => { express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'development'
    }) (req, res)
});

app.listen(port, () => console.log('Express scrambler running on port : ' + port));