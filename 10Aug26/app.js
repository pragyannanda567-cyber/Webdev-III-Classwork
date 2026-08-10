/* console.log(process.argv[2]);*/

const http = require("http");
require("dotenv").config()
const process = require("process");
/* console.log(process.env.PORT);*/

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.write(`<p>Welcome To Our Node.JS server</p>`);
    res.end();
});

server.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
});