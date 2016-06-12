/**
 * Created by TooNies1810 on 5/31/16.
 */
var http = require("http");
var url = require("url");
var formidable = require("formidable");

function start(route, handler) {
    console.log("server is started!!");

    http.createServer(function (req, res) {
        route.route(handler, req.url, res, req);
    }).listen(8888);
}

exports.start = start;