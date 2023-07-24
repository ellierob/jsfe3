const db = async (
    req, res, method='find', rec={}, 
    // obj={
        // col:'users', db:'test', cstm:'mongoos', user:'root', pass:'example', host:'172.17.0.2'
        col='users', db='test', cstm='mongoos', user='root', pass='example', host='172.17.0.2'
    // }
    )=>{
    

    console.log(`in db: method: ${method}, rec: ${JSON.stringify(rec)}, col: ${col}`);
    // let meths={mongodb:{find:'get'}};
    let meth= 
    method;
    // meths.dbm.method||method;

    // let moduls={mongoos:'mongoose'};
    
    // let modul=require(moduls.dbm);
    // console.log(obj);
    cstm = require(`./${cstm}.js`);
    
    // let client = 
    // cstm.client;
    // modul.client;

    // let mdlDir={mongoos:'mongoos'};

    let modl = 
    cstm.modl(db,col);
    // require(`./models/${mdlDir[dbm]}/${db}/${col}`);


    // prot={mongoos:'mongodb'};
    // authsrc={mongoos:'?authSource=admin'}
    
    // let uri=
    // cstm.uri(obj.db);
    // `${prot.dbm}://${user}:${pass}@${host}/${db}${authsrc.dbm}`;
    
    // connArrs = {mongoos:[uri,{useNewUrlParser: true}]}
    
    // await client.connect(connArrs.dbm);
    // return 
    
    const quer = async()=>{
        return await cstm[meth](req,res,rec,modl,meth==='ins'?cstm.connect:null)
        .then(async data=>{
            await console.log('data in db:',data);
            // if(meth!=='ins'){
                await cstm.disconnect();
            // }
            return await data || rec;
        })
        .catch(async err=>{
            console.log('err in db:',err);
            // if(meth!=='ins'){
                await cstm.disconnect();
            // }
            return rec || err || JSON.stringify({error:err})
        });
    }

    // let data
    //  = rec;

    if(meth==='ins'){
        let data;
        await cstm.connect(db,meth)
        // .then(
        // .once('open',
        //     async(
        //         // req,res,rec,modl,meth,cstm
        //     )=>{
                data = 
                // return 
                await quer();
            // const data = 
            // JSON.stringify()
            // return 
            // data =
            // await client.disconnect();
        // if(meth!=='ins') await cstm.disconnect();

        // console.log(`in db:`, data);
        // });
        return await data;
    } else {
        await cstm.connect(db,meth);
        // await cstm.disconnect();
        return await quer();
    }



    // return await data;

}

module.exports= db;