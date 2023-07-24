
import {useState, useEffect} from 'react';


function useXhr(
  endPoint, method='GET',  tbl, 
  setTbl, 
  upd=(t,resObj)=>resObj
  ){
    
  // const [tbl, setTbl] = useState([])
  const [packet, setPack] = useState(
    null
    // {
    //   mode:'no-cors',method:'GET',
    //   headers: ["Content-Type", "application/json"],body:null
    // }
    );
  const [errLog, setErr] = useState(false);
  
  const postData = (data)=>{
    setPack(
      {
        // mode:'no-cors',
        method: "POST",
        headers: 
        [
        "Content-Type", "application/json"
        ]
        ,
        body: 
        // JSON.stringify(data)
        data
      }
    )
  }

  // by default use effect executes after component first mount
  // without it fetch runs on loop
  useEffect(()=>{
    // async keyword? used when task cannot be finished in one go

    const fetchData = async (method,pack) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        method,
        // public API url endPoint from github.com/public-apis/public-apis/blob.master/README.md
        endPoint
        )

      xhr.responseType = 'json';
      
      xhr.withCredentials = true;

      try{
        xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
      } catch (er) {
        console.log(`request auth header error:`, er);
      }

      xhr.setRequestHeader(
        // pack.headers
        // [0],pack.headers[1]
        'Content-Type', 'application/json'
        );

      xhr.onload = async ()=>{
        console.log('packet:',pack);
        if (method==='GET'){
        // e.preventDefault();
        // try{
          // await keyword? to indicate later part of task
          // const res = await fetch(endPoint, {...pack});
          // const res = r;
          const res = 
          // await xhr.responseJSON;
          // await xhr.responseText;
          await xhr.response;
          // const res = pack.body;
          // const res = r;
          // console.log('response:', res);
          // const data = res.json();
          const resObj = 
          // await JSON.parse(res);
          res;
          await console.log('response object:', resObj);
          // await console.log('tbl:', tbl);
          setTbl(t=>{
            // if(resObj!==[]){
            // const upd = (t,resObj)=>{
            //   return resObj;
            // }
              // t= resObj;
              // return t;
            return upd(t,resObj);
            // }
          });
        } else if (method==='POST' && pack){
          // tbl.push(pack.body);
          const res = 
          // await xhr.responseJSON;
          // await xhr.responseText;
          await xhr.response;
          const resObj = 
          // await JSON.parse(res);
          res;
          await console.log(`response object:`, resObj);
          setTbl(
            t=>{
              console.log(`previous state:`, t);
              // t.push(pack.body);
              // const upd = (t,resObj)=>{
              //   t = [
              //     ...tbl, 
              //     // JSON.parse(pack.body),
              //     // pack.body
              //     resObj
              //   ];
              //   return t;
              //   // return [...t, pack.body];
              // }
              console.log(`new state:`, upd(t,resObj));
              return upd(t,resObj);
            }
            // tbl
            );
          // const res = tbl;
        }
      }
          //setBooks(res.json());
        // } catch(e){
        //   console.log('no body')
        // }

      xhr.onerror = async ()=>{
        // if(res.status === 404){
        //   throw new Error(res.statusText)
        // }
        await setErr(true)
        await console.log(errLog) 
      }


      console.log(method);
      // if (method==="OPTIONS"){
      //   method="POST";
      // }
      // xhr.responseType = 'json';
      if(method==="GET"
      //  && !pack
       ){
        // xhr.setRequestHeader(pack.headers
        //   [0],pack.headers[1]
        //   );
        // const git = await 
        xhr.send()
          // .then(res=>{
          //   if(res.ok){
          //     console.log(`git:`,res);
          //     return res.json();
          //   }
          // })
        ;
      } else if(method==="POST" && pack) {
        // xhr.responseType = 'json';
        // xhr.setRequestHeader(
        //   // pack.headers
        //   // [0],pack.headers[1]
        //   'Content-Type', 'application/json'
        //   );
        // const rcv = 
        // const git = 
        xhr.send(
          pack.body?JSON.stringify(pack.body):
          pack
          // {...pack.body}
          )
          // .then(res=>{
          //   if(res.ok){
          //     console.log(`git:`,res);
          //     return res.json;
          //   }
          // })
          ;
      }
    
    }
    
    if(method==="GET"){
      fetchData(method);
    } else if(method==="POST") {
      fetchData(method,packet);
      // xhr.open('GET', endPoint);
      // fetchData();
    }
      
  },
  [endPoint, packet, method]
  )

  console.log('table:', tbl, '\nerr:', errLog)
  return [tbl, postData, errLog]
}

export default useXhr;