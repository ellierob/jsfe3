export default fetchApi;

function fetchApi(url, method='GET', body = null ){
    body = JSON.stringify(body);
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(
        url,
        method==='GET'? {
            method: method,
            headers: headers
        } : {
            method: method,
            headers: headers,
            body: body
        }
        )
    // fetch returns promise by default
    // callbacks can be chained to it
    .then(res=>{
        // return res;
        return res.json();
        // return typeof res.json();
        // return res.text();
        // return typeof res.text();
        ;
    })
    .catch(err=>{console.log(err);})
    // .then(parsed => {
    //     console.log(
    //         parsed
    //     )
    //     return parsed;
    // })
}