const http = require('http');
const server = http.createServer((req, res) => {
    // res.end('hello from node.js server');
    if(req.url === '/'){
        const user = {
            name:'Shubham',
            age:24
        }
        res.statusCode = 200;
        res.setHeader('content-type',"application/json")
        res.end(JSON.stringify(user));
        // res.end('this   is home page');
    }else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('this is about page');
    }else{
        res.statusCode =404;
        res.end('page not found');
    }
})
server.listen(3100, () => {
    console.log('server is runnning at port 3100');
}) 
