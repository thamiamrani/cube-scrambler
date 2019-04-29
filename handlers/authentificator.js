function authentificator(request, response, next) {
    let password = request.headers["x-password"];
    if (password === process.env.SCRAMBLER_PASSWORD) {
        return next();
    }
    return response.status(401).send(JSON.stringify({"message": "Wrong password"}));
}

module.exports.authentificator = authentificator;
