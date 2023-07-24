// import {useEffect, useState} from 'react';
import useServ from '../customHooks/useXhr.jsx';
// import axios from 'axios'

export default Logout;

function Logout(props) {
    // const [uname, upUname] = useState(props.name);
    // const [pass, upPass] = useState(props.password);
    const root = props.root;
    const setRoot = props.setRoot;

    const url = props.url;
    const endPoint = url + 'logout';
    // const creds = props.creds;
    // const setCreds = props.setCreds;

    // console.log(`creds:`, creds);

    // Figure out a way to tell server to remove login cookies, tokens

    const authSet = (t, resObj) => {
        localStorage.setItem('stat', resObj.stat);

        let expires = new Date(Date.now() + 5 * 60 * 1000);

        document.cookie = `stat=${resObj.stat}`
            + `; expires=${expires.toUTCString()};`;

        // localStorage.setItem('token',resObj.token);

        // let expires = new Date(Date.now()+5*60*1000);
        // document.cookie = `token=${resObj.token}`
        // +`; expires=${expires.toUTCString()};`;
        // +`; expires=Thu, 25 Dec 2022 00:00:00 UTC;`;

        console.log(`cookie:`, document.cookie);
        return resObj.stat
    };

    // // const [[newCreds], postlogout, credErr] = useServ(endPoint, 'POST', [creds], setCreds);
    const [newRoot, changeRoot, rootErr] = useServ(endPoint, 'POST', root, setRoot, authSet);
    // const [newRoot] = useServ(endPoint, 'GET', root, setRoot, authSet);

    // upUname(u=>)
    const logout = async (e,
        req, res
    ) => {
        await e.preventDefault();
        await console.log('entered logout button press event');


        // const bod = {
        //     // req:req,res:res,
        //     name:creds.name,password:creds.password
        // }
        // postCreds(creds);
        const token = await localStorage.getItem('token');

        // await postlogout({token:token});
        await changeRoot({});

        // setRoot(root=>'login');

        // localStorage.removeItem(['stat','token']);
        await localStorage.removeItem('stat');
        await localStorage.removeItem('token');

        // console.log('no problem with fetch');
        // await console.log('newRoot:', newRoot);
        // console.log('no problem with promise');

    }

    return (
        <div>
            <form onSubmit={logout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    )
}