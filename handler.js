var fs = require("fs")

function start(res) {
    console.log("handler:start");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
		'<p>hello world!</p>' +
        '</body>' +
        '</html>';

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
}

function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("/tmp/test.png").pipe(response);
}


exports.start = start;
exports.show = show;
