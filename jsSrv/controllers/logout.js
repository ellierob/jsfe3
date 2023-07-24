const auth = require('./auth');
// const fs = require('fs');
// const promise = require('promise');
// const qp = require('querystring');
// // let func= {
module.exports = {
    postlogout: 
    // getlogout: 
    // } else if(req.url.startsWith("/home")){
    async function(
        req,res, 
        // qO
        ){
        // console.log(
        //     'in logout: \n', 
        //     `req.body:`, req.body, '\n',
        //     `qO:`, qO
        //     );

        // const token = qO.token;
        // const creds = {
        //     name: qO.name||req.body.name||'root',
        //     password: qO.password||req.body.password||'example',
        // }
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
                // const user = await
                // await this.routes.auth(
                // // await auth(
                //     req,res,
                //     // un,pss
                //     creds
                //     );
                
                // const token = 
                await this.routes.rmvToken(req,res,
                    // token
                    );
                // await user.crtToken();

                // return {name:user.name, token};
                return await {stat:'login'};
            } catch (error) {
                throw Error(error.message);
            }
    },
}