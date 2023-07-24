import * as allImp from './js export.mjs';
// let allImp = require("./js export");

import {exported} from './js export.mjs';
// let exported = require("./js export").exported;

// import {default as myDefault} from "./js export.js";
import myDefault from './js export.mjs';
// let myDefault = require("./js export").default;

let expObs = [
    {fn: allImp.unexported, nm: "unexported function"},
    {fn: allImp.exported, nm: "exported function from all exports"},
    {fn: allImp.thiser, nm: allImp.thiser()},
    {fn: exported, nm: "by name from exported functions"},
    {fn: myDefault, nm: "renamed default export"}
]

expObs.forEach((ex)=>{
    try{
        ex.fn()
        console.log(`successfully imported ${ex.nm}`);
    } catch(e){
        console.log(`couldn't load ${ex.nm}`)
    }
})