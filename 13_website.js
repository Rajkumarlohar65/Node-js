const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> This is rajkumar </h1> <p> Hey this is the way to rock the world ! </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> about rajkumar </h1> <p> Hey this is about world ! </p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('14_index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found 404! </h1> <p>The requested URL was not found on this server. </p>');
    }
    
})

server.listen(port, () => {
    console.log(`server is listining on port ${port}`);
}); 