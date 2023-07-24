const auth = require('./auth');
// const fs = require('fs');
// const promise = require('promise');
// const qp = require('querystring');
// // let func= {
module.exports = {
    args: { fs: 'what' },
    get: async function (req, res, qO) {
        //let writeup = 
        console.log(`entered login get route function`);
        // return ['something'];
        // await 
        // let that = this.routes.fs;
        // console.log('caller:',that);
        // console.log(`fs:`,this.routes.fs);
        // res.end();
        this.routes.fs.readFile("./controllers/login.html", "utf8", async function (err, data) {
            if (err !== null) {
                console.log(err);
                res.write(`couldn't read`);
                res.end();
                return [`couldn't read`];
            } else {
                // return [`something`];
                let d =
                    await
                        [data];
                res.write(data);
                res.end();
            }
        })
    },

    posthome:
        // } else if(req.url.startsWith("/home")){
        async function (req, res, qO) {

            console.log(
                'in login: \n',
                `req.body:`, req.body, '\n',
                `qO:`, qO
            );

            const creds = {
                name: qO.name || req.body.name || 'root',
                password: qO.password || req.body.password || 'example',
            }

            // const un = 
            // qO.name==='undefined'?req.body.name:qO.name
            // ||
            // 'root'
            // ;
            // const pss = 
            // qO.password==='undefined'?req.body.password:qO.password
            // ||
            // 'example'
            // ;
            // this.routes.fs.readFile("./routes/home.html", "utf8", async function(err,data){
            // const checks = await 
            try {
                const user = await
                    await this.routes.auth(
                        // await auth(
                        req, res,
                        // un,pss
                        creds
                    );

                const token =
                    await this.routes.crtToken(req, res, user._id);
                // await user.crtToken();
                try {
                    // const cookie = require('cookie-parser');
                    // app.use(cookie);
                    // cookie();
                    await res.cookie(
                        'token',
                        // user._id,
                        token,
                        {
                            seure: false,
                            httpOnly: true,
                            maxAge: 5 * 60 * 1000,
                            expires: new Date(Date.now() + 5 * 60 * 1000)
                        }
                    );
                    console.log(`succeeded to set cookie`);
                } catch (e) {
                    console.log(`failed to set cookie`);
                    req.token = { token };
                }

                await console.log('cookies to be sent:\n', req.headers.cookie);

                // return {name:user.name, token};
                return await { stat: 'matches', token };
            } catch (error) {
                throw Error(error.message);
            }

            // if(err!==null){
            //     // res.write('error');
            //     return JSON.stringify([{error:`couldn't read`}]);
            // } else 
            // if (
            //     !checks
            //     ){
            //     // console.log(`promise:`, JSON.parse(promise)[0].password);
            //     // res.write('wrong password');
            //     // res.end();
            //     // return await JSON.stringify([{checks:false}]);
            //     throw Error('Incorrect login credentials');
            //     // return await 'wrong';
            // } else {
            //     console.log('query received in login:',qO);
            //     // res.write(data);
            //     // res.write(qs.name);
            //     // res.write(un);
            //     // res.end();
            //     // return await JSON.stringify([{checks:true}]);
            //     // return await 
            //     // [
            //         // 'matches'
            //         // {checks:true}
            //     // ];
            // }
            // })
            // })
        },

    // optionshome: async ()=>{console.log(this);return await this;}
}

// // func['get']('');