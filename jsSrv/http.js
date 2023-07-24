

let routes = 
require('./routes');

const http = require('http');
const url = require('url');
// const fs = require('fs');
const qp = require('querystring');
// const promise = require('promise');
const { on } = require('stream');

const server = http.createServer(function(req,res){
    let headers = req.headers;
    let method = req.method.toLocaleLowerCase();
    console.log(`unmodified url:`, req.url)
    let parsedURL = url.parse(
        // request url starts after root    
        req.url, 
        // query string
        true
        );
    
    let path = parsedURL.pathname;

    console.log(
        `method:`, method, `\n`,
        // `headers:`, headers, `\n`,
        `path:`, path, `\n`,
        // `query:`, qO,
        );

    trimmedPath = path.replace(
        // regular expression starts with /, ends with /g
        // regex for one or more slashes at end or start of expression
        /^\/+|\/+$/g, 
        ''
        );
    console.log(`trimmed path:`, trimmedPath);
    

    if(routes[method+trimmedPath]===undefined){
        console.log(
            `routes key: `, method+trimmedPath, `\n`,
            `route value:`, routes[method+trimmedPath]
            );
        res.write('invalid query');
        res.end();
    } else {
        let resp = ['waiting'];
        async function call(){
            console.log(
                `routes key: `, method+trimmedPath, `\n`,
                `route value:`, routes[method+trimmedPath]
                );
        }
        let qO;
        if (method==='post'){
            req.on('data', (q)=>{
                // let qO = {name:'empty'};
                // let qs =  ;
                let qO =  qp.parse(q.toString());
                // console.log(qO);
                routes[method+trimmedPath](req,res,qO);
                // await call()
            })
        } else {
            let qO = parsedURL.query;
            routes[method+trimmedPath](req,res,qO);

        }
        // routes[method+trimmedPath](req,res,qO);
    }
})

server.listen(
    // in windows ports 1024-65535 are free from os software and pre-defined protocol
    3001, 
    function(){
    console.log('listening on port 3001')
})