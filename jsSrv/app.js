// returns the module
// good instead of import
const fs = require('fs');

const pth = require('path');

const supeRoot = //"/";
    pth.join(
        // javascript current directory
        __dirname,
        // relative path
        `/../../`
    );

// fs.copyFileSync(
//     // source
//     'file.txt',
//     // destination automatically created if unavailable
//     'file2.txt'
//     );


const xpr = require('express');

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

// declare root for static file paths in html sources
app.use(xpr.static(supeRoot + "frontend/1/public"))



// route handling

// root /

app.get(
    // route argument
    // root
    '/',
    // callback
    (req, res) => {
        res.send('Hi from server')
    })


// about

app.get(
    // route argument
    '/about',
    // callback
    (req, res) => {
        res.send('This is a test about page. But is it live?')
    })


// calculator

app.get(
    // route argument
    '/calculator',
    // callback
    (req, res) => {
        let path = supeRoot + `frontend/1/html/index.html`;
        console.log(path);
        res.sendFile(path);
        // res.send('is it live from docker?')
    })

app.post(
    '/calculator',
    function (req, res) {
        // inputs of html input elements can be accessed as values
        // for names of html elements as keys of request.body object
        let num1 = Number(req.body.num1);
        let num2 = Number(req.body.num2);
        let sum = num1 + num2;
        console.log(req.body.para, req.body);
        res.send(`result is ${sum}`);
    }
)


// API https get

const https = require("https");

app.get(
    '/weather',
    function (req, res) {
        const path = supeRoot + 'frontend/1/html/index.html';
        res.sendFile(path);
    })

app.post(
    '/weather',
    function (req, res) {
        const query = req.body.cityname;
        const apiKey = "41c040e5e8db4292851212852223110";
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;
        https.get(
            url,
            function (
                // response from the get method
                resAPI
            ) {
                console.log(resAPI.statusCode);
                resAPI.on('data', function (data) {
                    // JSON.parse turns JSON string to javascript object
                    const dataObj = JSON.parse(data);
                    const temp = dataObj.current.temp_c;
                    // JSON.stringify turns object to JSON string
                    const JSONString = JSON.stringify(dataObj.current.condition);
                    console.log(data, dataObj, JSONString, temp);
                    res.write(`<p>${query} temperature is ${temp}ºC\n</p>`);
                    // 
                    res.write(`<img src='https:${dataObj.current.condition.icon}'/>`);
                    res.send()
                })
            }
        )
    }
)


// API request write

app.get(
    '/mailinglist',
    function (req, res) {
        const path = supeRoot + 'frontend/1/html/index.html';
        res.sendFile(path);
    })

app.post(
    '/mailinglist',
    function (req, res) {
        const fName = req.body.fname;
        const lName = req.body.lname;
        const email = req.body.email;
        const data = {
            members: [
                {
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: fName,
                        LNAME: lName
                    }
                }
            ]
        }
        const dataJSON = JSON.stringify(data);
        const url = process.env.MAILCHIMP_API;
        const options = {
            method: 'POST',
            // user:apiKey
            auth: process.env.MAILCHIMP_KEY
        }

        const request = https.request(
            url,
            //options
            options,
            function (
                // response from the get method
                resAPI
            ) {
                console.log(resAPI.statusCode);
                if (resAPI.statusCode === 200) { res.send('Subscribed!'); }
                else { res.send('Error!'); }
                resAPI.on('data', function (data) {
                    console.log(JSON.parse(data));
                });
            }
        )

        request.write(dataJSON);
        request.end();
    }
)


// redirect
app.post('/failure', function (req, res) {
    res.redirect('/mailinglist');
})

//fallback
app.use(function (req, res) {
    res.redirect('/mailinglist');
})


// start server by require('express')().listen
app.listen(
    // listening on port
    // react frontend app listens on 3000
    process.env.PORT || 3005,
    // callback
    function () {
        console.log('server started on port 3005');
    });
