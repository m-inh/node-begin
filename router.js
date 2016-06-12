/**
 * Created by TooNies1810 on 5/31/16.
 */

function route(handler, pathname, res, req) {
    console.log("pathname is: " + pathname);
    if (typeof handler[pathname] === 'function') {
        handler[pathname](res, req);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 not found!");
        res.end();
    }
}

exports.route = route;