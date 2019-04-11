var server = require("./server");
var router = require("./router");
var requestHandler = require("./handler");

var handler = {};
handler["/"] = requestHandler.start;
handler["/show"] = requestHandler.show;

server.start(router, handler);
