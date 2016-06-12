/**
 * Created by TooNies1810 on 5/31/16.
 */

var server = require("./server");
var router = require("./router");
var requestHandler = require("./handler");

var handler = {};
handler["/"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
handler["/show"] = requestHandler.show;

server.start(router, handler);