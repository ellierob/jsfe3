import { useEffect, useState } from 'react';
import useServ from '../../customHooks/useXhr.jsx';
import axios from 'axios'

export default Login;

function Login(props) {
    // const [uname, upUname] = useState(props.name);
    // const [pass, upPass] = useState(props.password);
    const root = props.root;
    const setRoot = props.setRoot;
    const url = props.url;
    const endPoint = url + 'home';
    const creds = props.creds;
    const setCreds = props.setCreds;

    console.log(`creds:`, creds);

    const authSet = (t, resObj) => {
        localStorage.setItem('stat', resObj.stat);

        let expires = new Date(Date.now() + 5 * 60 * 1000);

        document.cookie = `stat=${resObj.stat}`
            + `; expires=${expires.toUTCString()};`;

        localStorage.setItem('token', resObj.token);

        document.cookie = `token=${resObj.token}`
            + `; expires=${expires.toUTCString()};`;
        // +`; expires=Thu, 25 Dec 2022 00:00:00 UTC;`;

        console.log(`cookie:`, document.cookie);
        return resObj.stat
    };

    // const [[newCreds], postCreds, credErr] = useServ(endPoint, 'POST', [creds], setCreds);
    const [newRoot, postCreds, rootErr] = useServ(endPoint, 'POST', root, setRoot, authSet);

    // upUname(u=>)
    const posthome = async (e,
        req, res
    ) => {
        e.preventDefault();
        console.log('entered posthome');
        const bod = {
            // req:req,res:res,
            name: creds.name, password: creds.password
        }

        postCreds(creds);
        // const get = 
        // // await axios.post(endPoint,bod);
        // await fetch(
        //     endPoint,
        //     {
        //         mode: 'no-cors',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         method: 'POST',
        //         body: 
        //         JSON.stringify(
        //             bod
        //             )
        //     },
        //     //, JSON.stringify(
        //     //     bod
        //     // )
        // )
        // .then(r=>{console.log(r);return r.json();})
        // .then(j=>{console.log(`received:`, j); return j})
        // .catch(e=>{return {error:'error'}});
        console.log('no problem with fetch');
        await console.log('newRoot:', newRoot);
        console.log('no problem with promise');
        // await console.log(`response`,res);
        // return newCreds;
        // const posthome = fetch(endPoint,{name:uname,password:pass});
    }
    // useEffect(()=>{
    // },
    // [])
    function ass(e) {
        const { type, name, value } = e.target;
        setCreds(c => {
            // return {name:e.target.value,...c}
            return { ...c, [name]: value };
        })
    }

    return (
        <div>
            <h2>Logins</h2>
            <form onSubmit={posthome}>
                Name <input type="text" name="name" value={creds.name} onChange={ass} />
                Email <input type="text" name="email" value={creds.email} onChange={ass} />
                Phone <input type="text" name="phone" value={creds.phone} onChange={ass} />
                Password: <input type="password" name="password" value={creds.password} onChange={ass} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}