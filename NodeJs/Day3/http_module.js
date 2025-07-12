const http = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("Hello");
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("<h1>Hello from nodejs</h1>");
});


server.listen(7900,()=>{
    console.log("----------Server Started------------");
});

// http://127.0.0.1:7900