const http = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("Hello");
    res.end("Hello from nodejs");
});


server.listen(7900,()=>{
    console.log("----------Server Started------------");
});

// http://127.0.0.1:7900