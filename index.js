const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hostname is:' + req.hostname );
    res.end;
});

app.get('/api/', (req, res)=>{
    res.send([1, 2, 3]);
    res.end;
});

//Set PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`Listening at port ${port}...`);});





