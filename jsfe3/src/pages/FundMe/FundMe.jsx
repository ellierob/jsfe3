import { useEffect, useState } from 'react';
import useServ from '../../customHooks/useXhr.jsx';
import axios from 'axios';
import { ethers } from 'ethers';
import { abi, contractAddr } from "./constants.jsx"

export default Fund;

function Fund(props) {

    if (typeof window.ethereum !== "undefined") {
        console.log(`I see metamask`);
    } else {
        console.log(`No metamask`);
    }
    // const [uname, upUname] = useState(props.name);
    // const [pass, upPass] = useState(props.password);
    const root = props.root;
    const setRoot = props.setRoot;
    const url = props.url;
    const endPoint = url + 'home';
    const creds = props.creds;
    const setCreds = props.setCreds;

    let [amo, setAmo] = useState("0.01");
    let [contractBalance, setContractBalance] = useState("?");

    console.log(`creds:`, creds);

    let connectBtn, disconnectBtn, main, fundBtn;

    console.log(`connectbtn`, connectBtn);

    const getBalance = async (addr) => {
        // e.preventDefault();
        console.log('addr:', addr);
        if (typeof window.ethereum !== "undefined") {
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            let balanceBN = await provider.getBalance(addr);
            console.log(balanceBN);
            let balance =
                // balanceBN.divn(10 ** 18).toString();
                ethers.utils.formatEther(balanceBN);
            console.log(addr, `balance:`, balance);
            try {
                return balance;
            } catch (er) {
                console.log(`erro:`, er.message);
            }
        } else {
            console.log(`not connected to metamask`);
        }
    }

    // setContractBalance(async cb => await getBalance(contractAddr));

    const cBBox = document.getElementById('contractBalance');

    console.log("balance box:", cBBox, "\ncontract Balance:", contractBalance);

    // cBBox.innerHTML = `Balance: ${contractBalance || "0.x"}`;

    const fund = async (e, ethAmount = amo) => {
        e.preventDefault();
        console.log('ethamount:', ethAmount, amo)
        if (typeof window.ethereum !== "undefined") {
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            let signer = provider.getSigner();
            console.log(`signer:`, signer);
            const contract = new ethers.Contract(contractAddr, abi, signer);
            // const sendValue = "10000000000000000";
            try {
                const txResp = await contract.fund({ value: `${ethAmount * 10 ** 18}` });
                console.log(`funded with ${ethAmount}`);
                contractBalance = await getBalance(contractAddr);
                try {
                    setContractBalance(cb => contractBalance);
                } catch (er) {
                    console.log('error:', er.message);
                }
            } catch (er) {
                console.log(`erro:`, er.message);
            }
        } else {
            console.log(`not connected to metamask`);
        }
    }

    const walletConnect = async (e) => {
        e.preventDefault();
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(`Connected to ${window.ethereum.selectedAddress}.`);
            connectBtn = document.getElementById("walletConnect");
            console.log("connect buttons", connectBtn);
            connectBtn.setAttribute("id", "walletDisonnect");
            connectBtn.innerHTML = "Disconnect";
            // connectBtn.setAttribute('onClick',) = { walletDisconnect };
            connectBtn.onClick = walletDisconnect;
            main = document.getElementById("main");
            console.log(`main`, main);
            fundBtn = document.getElementById("fund")
            main.appendChild(fundBtn);
            // <button type="" id="fund" onClick={fund}>fund</button>
            fundBtn.innerHTML = "fund";
            fundBtn.setAttribute("id", "fund");
            fundBtn.setAttribute("type", "fund");
            fundBtn.onClick = fund;

            console.log(`Connected`);
        } else {
            console.log(`No metamask`);
            document.getElementById("walletConnect").innerHTML = "Install Metamask";
        }
    }

    const walletDisconnect = async (e) => {
        e.preventDefault();
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            disconnectBtn = document.getElementById("walletDisonnect");
            disconnectBtn.innerHTML = "Connect";
            disconnectBtn.setAttribute("id", "walletConnect");
            // disconnectBtn.setAttribute('onClick',) = { walletDisconnect };
            disconnectBtn.onClick = walletConnect;
            main = document.getElementById("main")
            main.removeChild(fundBtn);
            console.log(`Disconnected`);
        } else {
            console.log(`Already disconnected`);;
        }
    }

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
        <div id="main">
            <h2>Fund Me</h2>
            <form
            // onSubmit={posthome}
            >
                {/* Name <input type="text" name="name" value={creds.name} onChange={ass} />
                Email <input type="text" name="email" value={creds.email} onChange={ass} />
                Phone <input type="text" name="phone" value={creds.phone} onChange={ass} />
                Password: <input type="password" name="password" value={creds.password} onChange={ass} />
                <button type="submit">Submit</button> */}
                <button id="walletConnect" onClick={walletConnect}>Connect</button>
                <input type="text" name="amount" value={amo} onChange={(e) => { setAmo(amo => { return e.target.value }) }} />
                <button type="" id="fund" onClick={fund}>fund</button>
                <label id="contractBalance">Balance: {contractBalance}</label>
            </form>
        </div>
    )
}