import fetch from "cross-fetch";

// get request  
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
        // parses json response to object
        res.json();
    })
    .then(data => {
        console.log(data);
    })