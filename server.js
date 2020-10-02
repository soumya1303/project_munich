const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.write('you are at the root');
        res.end();
    }
    else {
        res.write('bad request');
        res.end();
    }
});

console.log ('Listening on port 3000...');
server.listen(3000);




