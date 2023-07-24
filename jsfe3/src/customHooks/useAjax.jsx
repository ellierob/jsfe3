import $ from "jquery";


import {useState, useEffect} from 'react';


function useJqAjax(url, method){
    
  const [tbl, setTbl] = useState([])
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
      try {
        // await keyword? to indicate later part of task
        const res = await fetch(url, {...pack});
        if(res.status === 404){
          throw new Error(res.statusText)
        }
        const data = await res.json();
        console.log(data)
        setTbl(data)
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

  console.log(tbl, errLog)
  return [tbl, postData, errLog]
}

export default jqAjax;