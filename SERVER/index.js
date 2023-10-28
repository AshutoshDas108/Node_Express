const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer( (req, res) => {
    if(req.url == "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New request recieved\n`
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const userName = myUrl.query.myname;
                res.end(`I am ${userName}`);
                break;
            case "/search":
                const searchQuery = myUrl.query.search_query;
                res.end("Here is the result for " + searchQuery); 
            case "/signup":
                if(req.method === "GET") res.end("This is a sign up page");
                else if (req.method === "POST") req.end("Sucess!!");
            default:
                res.end("Error 404");
        }
    })
});

myServer.listen(8000, () => console.log("Server started"));