let scrambler = require('../domain/cubeScrambler');

var root = {
    scramble: () => scrambler.scrambler(3)
};

var errorMessage = {
    scramble: () => "wrong password"
};

function scrambleHandler(request, response) {
    let password = request.headers["x-password"];
    if (password === process.env.SCRAMBLER_PASSWORD) {
        return root;
    }
    return response.status(401).end();
}

module.exports.scrambleHandler = scrambleHandler;