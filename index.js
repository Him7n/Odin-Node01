let http = require('http')
let fs = require('fs')
// import * as fs from 'fs';
// import * as http from 'http'
console.log('hi');

 http.createServer( (req,res)=>{
    if(req.url=='/'){
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        
        res.writeHead(200,{ 'Content-Type': 'text/html' })
        // res.write(   data)
        res.end(data);
    })}else if(req.url=='/contact'){
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err;
            
            res.writeHead(200,{ 'Content-Type': 'text/html'} )
            res.write(data)
            return  res.end();
        })

    }else if(req.url=='/about'){
        fs.readFile('about.html',(err,data)=>{
            if (err) throw err
            res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
        })
        
    }else{
        fs.readFile('404.html',(err,data)=>{
            if (err) throw err
            res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
        })
    }
} ).listen(8080)