routes = require('./routes/routes');

const xpr = require('express');

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const cors = require('cors')

//const app = require('express')();
const app = xpr();

const bP = require('body-parser');
// require('express')().use(require('body-parser').urlencoded)  
// creates request.body property object inside request object of the express
// that stores key value pairs for names and values of input fields
app.use(bP.urlencoded({
    // allows posting nested objects
    extended: true
}))

app.use(bP.json());

app.use(cors({
    origin: [
        // '*',
        // 'http://10.160.58.232:53003',
        // 'http://10.14.123.155:53003',
        // 'http://192.168.2.2:3002',
        // 'http://192.168.0.15:3002',
        // 'http://127.0.0.1:3002',
        // 'http://127.0.1.1:3002',
        // 'http://localhost:3002',
        // 'http://192.168.0.6:3002',
        // 'http://192.168.0.6:53003',
        process.env.FRONTEND_URL,
    ],
    credentials: true
}));

// const cookie = require('cookie-parser');
// app.use(cookie);

// app.use(bP.json());
// app.use(xpr.json());

// app.defaultConfiguration =
// (()=>{
//     app.use(xpr.bodyParser());
// })

app.use(
    // route argument
    // root
    // '/', 
    // callback
    // bP.urlencoded({
    //     // allows posting nested objects
    //     extended:false
    // }),
    async function (req, res) {
        console.log(
            `req.body:`, req.body, `\n`,
            `req.query:`, req.query, `\n`,
            `req.payload:`, req.payload, `\n`,
            `req.path:`, req.path, `\n`,
            `req.route:`, req.route, `\n`,
            `req.ip:`, req.ip, `\n`,
            `req.params:`, req.params, `\n`,
            // `req:`, req
            // `res:`, res
        );
        let method = req.method.toLowerCase();
        method = method === 'options' ? 'post' : method;
        // const url = require('url');
        let parsedURL = require('url').parse(req.url, true);
        let path = parsedURL.pathname;
        trimmedPath = path.replace(
            // regular expression starts with /, ends with /g
            // regex for one or more slashes at end or start of expression
            /^\/+|\/+$/g,
            ''
        );
        let query =
            req.body
            ||
            req.query
        // res.send('Hi from server')
        const apiKey = method + trimmedPath
        const route = routes[apiKey]
        console.log(
            `method:`, method, `\n`,
            // `path:`, req.route.path, `\n`,
            `path:`, trimmedPath, `\n`,
            `API key:`, apiKey, `\n`,
            `API value:`, route, `\n`,
            `query:`, query, `\n`,
            // 'this:', this.routes.qp
        );

        if (route === undefined) {
            console.log('wrong request');
            console.log(routes['wrongReq']);
            const dat = await routes['wrongReq'](res);
            await res.write(JSON.stringify(dat));
            await res.end();
            // return await dat;
        } else {
            try {
                let dat = await route(req, res, query);
                // dat = dat===undefined?JSON.stringify([{undefined:undefined}]):JSON.stringify(dat);
                await console.log('returned from express function:', dat);
                await res.status(200).json(dat);
                // await res.write(dat);
                // await res.end();
                // return await dat;
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        }
    })

app.post(
    // route argument
    // root
    '/',
    // callback
    (req, res) => {
        res.send('Hi from server')
    })
app.get(
    // route argument
    // root
    '/',
    // callback
    (req, res) => {
        res.send('Hi from server')
    })



// redirect
app.post('/failure', function (req, res) {
    res.redirect('/mailinglist');
})

// //fallback
// app.use(function(req, res){
//     res.redirect('/mailinglist');
// })


// start server by require('express')().listen
app.listen(
    // listening on port
    // react frontend app listens on 3000
    process.env.PORT || 3005,
    // callback
    function () {
        console.log(`server started on port ${process.env.PORT || 3005}`);
    });