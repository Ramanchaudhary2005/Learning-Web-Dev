const http = require("http");
const server = http.createServer((req, res) => {
    console.log("-->", req.method, req.url);
    res.end("Done");
});

server.listen(2900, () => {
    console.log("-------server started--------");
});