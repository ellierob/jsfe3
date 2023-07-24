let dbAccss = 'db access';

const uri =
  "mongodb://root:example@mongodb/?authSource=admin";

const { MongoClient } = require("mongodb");

async function mongd(req,res) {
    
    // Connection URI
    // Create a new MongoClient
    const client = new MongoClient(uri);
  //   try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      dbAccss = 'connected to mongo';
      // Establish and verify connection
      await client.db("company").command({ ping: 1 });
      console.log("Connected successfully to server");
  //   } catch(e){
  //     console.log(console.dir)
  //   } finally {
      const dtb=client.db('company');
      dbAccss = 'found database "company"';
  
      let cols = await dtb.collections();
  
      let docus = await Promise.all(cols.map(col=>col.find({}).toArray()));
  
      try{
        docus = await dtb.collection('employees').find({
          name:"Goku"
        }).toArray(
        //   async function(err,emp){
        //   if(!err){
        //     console.log(emp);
        //     dbAccss = await emp;//client.db("company");
        //   } else {
            
        //   }
        // }
        );
      } catch(e){ docus = 'document/record not found' }
  
      // dbAccss = docus;
      dbAccss = JSON.stringify(docus) || docus;
      // res = dbAccss;
  
      // Ensures that the client will close when you finish/error
      await client.close();
      return dbAccss
  //   }
  }