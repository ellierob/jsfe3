const db =
  'test';
// 'company';

const modelConnect = (db = 'test') => {
  const uri =
    // `mongodb+srv://${process.env.MONGOCLUSTERUSER}:${process.env.MONGOCLUSTERPASS}@cluster0.ecgfwo7.mongodb.net/test?retryWrites=true&w=majority`
    // 'mongodb+srv://${process.env.MONGOCLUSTERUSER}:${process.env.MONGOCLUSTERPASS}@cluster0.ecgfwo7.mongodb.net/test?authSource=admin'
    `mongodb${process.env.MONGOL.startsWith('cluster') ? '+srv' : ''}://` +
    // process.env.MONGOUSER
    require('fs').readFileSync(process.env.MONGOUSER_FILE, 'utf8').trim()
    // 'root'
    + `:` +
    // process.env.MONGOPASS
    require('fs').readFileSync(process.env.MONGOPASS_FILE, 'utf8').trim()
    // 'example'
    + `@` +
    `${process.env.MONGOL}` +
    // `mongol` +
    `/${db}?${process.env.MONGOL.startsWith('cluster') ? 'retryWrites=true&w=majority' : 'authSource=admin'}`;

  // return 
  require('mongoose').connect(uri, (err) => {
    if (err) {
      console.log(`${err.message}`);
    } else {
      console.log(`mongodb connected`);
    }
  })
}

const connect = (db, meth) => {
  const uri =
    // (db)=>
    // "mongodb://root:example@mongodb/company?authSource=admin";
    // `mongodb://root:example@172.17.0.2/${db}?authSource=admin?directConnection=true`;
    // `mongodb://root:example@172.17.0.2/${db}?authSource=admin`;
    // `mongodb://root:example@${mongol}/${db}?authSource=admin`;
    `mongodb://root:example@${process.env.MONGOL}/${db}?authSource=admin`;
  // if (meth==='ins'){
  //   return require('mongoose').createConnection(uri,{
  //     // require('mongoose').connect(uri,{
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true
  //     });
  // } else {
  return require('mongoose').connect(uri, {
    // require('mongoose').connect(uri,{
    useNewUrlParser: true,
    // useUnifiedTopology: true
  }
  );
  // }
}

const disconnect = () => {
  require('mongoose').disconnect();
}


// const prompt = require('prompt');
// prompt.start();
let col =
  this.col ||
  'users';
// prompt.get(['collection']);
// 'employees';

// object with methods to manipulate data
let modl = (db, col) => require('../models/mongoos/' + db + '/' + col);

// // client.connect(uri, {useNewUrlParser: true});
// let dbAccss = `connected`;

// module.exports.test = 
const test = async function (arg1, arg2) {
  return await `${arg1}, successful ${arg2}`;
}

const rec = {};

// module.exports.findy = 
let find
  = async function (
    req, res,
    rec,
    // col='users',
    modl
  ) {
    // await client.connect(uri, {useNewUrlParser: true});
    // let dbAccss = 
    // JSON.stringify([{connected:`connected`}]);
    // let mdl = require('./models/'+db+'/'+col);
    // return await 'connected';
    console.log(`received rec:`, JSON.stringify(rec));
    return await modl.find(
      rec,
      // {"name":"Goku"},
      // callback to trigger after model is found
      async (err, data) => {
        // return 'tried to find';
        if (err !== null) {
          // dbAccss = await JSON.stringify(err);
          dbAccs = await JSON.stringify([{ error: `error` }]);
          // dbAccss = `errorred`;
          // return 'error'
          await console.log(`mongoose error:`, dbAccs);
          // return await dbAccss;
          return dbAccs
        } else {
          let dbAccs = await data;
          dbJsn = await JSON.stringify(dbAccs);
          await console.log(`mongoose success:`, dbJsn);
          // res.write(dbAccss);
          // dbAccss = `found data`;
          // return 'success'
          // return await dbAccss;
          return await dbJsn;
        }

      })
      .clone();
    // client.disconnect();
    // return await dbAccss;
    // return await dbAccss;
  }

// module.exports.ins = 
let ins =
  async function (req, res,
    // col='users',
    rec = { name: "Gotenks", salary: 300 },
    modl,
    conn
  ) {
    // await client.connect(uri, {useNewUrlParser: true});
    let newMdl = new modl(
      // {name: "Gotenks", salary: 300}
      rec
    );

    console.log(`new model:`, newMdl);

    // let dbAccss = 
    // await newMdl;
    // `connected`;
    // return 
    await newMdl.save(
    )
    // .then(async data=>{
    //   // async(err,data)=>{
    //   //   if(err===null){
    //       const dat = await JSON.stringify(data||newMdl) ;
    //       await console.log('mongoose return data:', dat);
    //       // dbAccss = await err;
    //       // await console.log(dbAccss);
    //       // await client.disconnect();
    //       // return await dbAccss;
    //       await conn.close();
    //       // await disconnect();
    //       return await dat;
    //   //   }
    //   // }
    //   // )
    //   })
    // .catch(async err=>{
    //   //   } else {
    //     // const er = await JSON.stringify(newMdl||{error:err});
    //     // dbAccss = await data;
    //     // console.log(dbAccss);
    //     await console.log(`mongoose return error:`, err);
    //     // await client.disconnect();
    //     await conn.close();
    //     // await disconnect();
    //     // return await dbAccss;
    //     // return er;
    //     return await JSON.stringify(err);
    // })
    return newMdl;
    // .clone()
    // .then(data=>JSON.stringify(data))
    // .catch(e=>JSON.stringify(e))
    ;
    // let dbAccss = 
    // await JSON.stringify(rec); 
    // await newMdl;

    // await console.log(`returnd in mongoose:`, dbAccss);
    // return await dbAccss || newMdl;
  }

// module.exports.upd = 
let upd =
  async function (req, res,
    options,
    // col='users',
    modl) {
    // mdl.find(
    // await client.connect(uri, {useNewUrlParser: true});
    let dbAccss =
      // `connected`;
      await modl.findOne(
        options.filter,
        // {name:"Gotenks"}, 
        async (err, data) => {
          if (err === null) {
            // await data;
            options.key = options.newValue;
            // data.salary = 800;
            // data.forEach(d=>{
            //   d.salary = 600;
            // })

            data.save(async (err) => {
              if (err === null) {
                dat = await data;
                dat = JSON.stringify(dbAccss);
                return dat;
              } else {
                dat = await err;
                return dat;
              }
            }
            );
          } else {
            err = await err;
            return err;
            // dbAccss = `errorred`;
          }

        }).
        clone();
    // client.disconnect();
    return await dbAccss;
  }

// module.exports.del = 
let del =
  async function (req, res,
    // col='users',
    modl
  ) {
    // await client.connect(uri, {useNewUrlParser: true});
    let dbAccss =
      // `connected`;
      await modl.deleteOne({ name: "Gotenks" }, async (err, data) => {
        if (err === null) {
          dbAccss = await data;
          dbAccss = JSON.stringify(dbAccss);
        } else {
          dbAccss = await err;
        }
      })
        .clone();
    // client.disconnect();
    return await dbAccss;
  }


module.exports = {
  modelConnect,
  connect,
  disconnect,
  modl,
  // db,
  // uri,
  // col,
  test,
  find,
  ins,
  upd,
  del,
  // mongsf
}


