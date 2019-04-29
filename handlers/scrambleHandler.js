let scrambler = require('../domain/cubeScrambler');

var root = {
    scramble: () => scrambler.scrambler(3)
};

module.exports.root = root;