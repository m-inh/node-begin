var http = require("http");

function start(router, handler) {
    console.log("server is listening on 8888");

    http.createServer(function (req, res) {
        router.route(handler, req.url, res, req);
    }).listen(8888);
}

exports.start = start;
