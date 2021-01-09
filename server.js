let http = require("http"); 
let fs = require("fs"); 

console.log("Hello  Running at 8080");
http.createServer((req, res) =>{

    fs.readFile("server/index.html", (err, data)=>{
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data); 
        return res.end();
    }); 

}).listen(process.env.PORT || 8000);

