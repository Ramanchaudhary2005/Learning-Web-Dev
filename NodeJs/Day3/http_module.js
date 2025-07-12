const http = require("node:http");
const fsPromises = require('fs/promises');

const server = http.createServer(async(req, res)=>{
    try{
        console.log("Hello");
        if(req.url=="/"){
            const data = await fsPromises.readFile('./pages/homepage.html','utf-8');
            res.end(data);
        }
        else{
            const data = await fsPromises.readFile('./pages/notFound.html','utf-8');
            res.end(data);
        }
    }
    catch(err){
        res.end("<h1>Something went wrong</h1>")
    }
    
    
});


server.listen(7900,()=>{
    console.log("----------Server Started------------");
});

// http://127.0.0.1:7900