
import {useState, useEffect} from 'react';


function useFetch(url, method='GET', tbl, setTbl, body=null){
    
  // const [tbl, setTbl] = useState([])
  const [packet, setPack] = useState(null)
  const [errLog, setErr] = useState(false)
  
  const postData = (data)=>{
    setPack({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  // by default use effect executes after component first mount
  // without it fetch runs on loop
  useEffect(()=>{
    // async keyword? used when task cannot be finished in one go
    const fetchData = async (pack) => {
      console.log('packet:',pack);
      try {
        // await keyword? to indicate later part of task
        const res = await fetch(url, {...pack});
        if(res.status === 404){
          throw new Error(res.statusText)
        }
        const resp = await res.json();
        console.log('response:', resp)
        setTbl(t=>
          packet===null?resp:[...t,resp]
          )
        //setBooks(res.json());
      }
      catch (err){
        setErr(true)
        console.log(errLog)
      }      
    }

    if(method==="GET"){
      fetchData()
      } else if(method==="POST") {
      fetchData(packet)
      }
      
  },
  [url, packet, method ]
  )

  console.log('table:', tbl, '\nerr:', errLog)
  return [tbl, postData, errLog]
}

export default useFetch