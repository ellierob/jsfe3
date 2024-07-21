// import { vars, txtLs, refTarg } from "./vars.jsx";
// const $ = jQuery


const thgn = document.querySelector("#thgn");

// console.log(thgn);
// txtObj.forEach(nm, obj => {
txtLs.forEach(obj => {
    let newRw = document.createElement("tr");

    let rwInd = document.createElement("td");
    rwInd.innerText = obj.text;
    newRw.appendChild(rwInd);
    let objVars = obj.vars;
    vars.forEach(vary => {
        let varyObj
        if (vary in objVars) {
            varyObj = objVars[vary]
        } else {
            varyObj = { "text": "=", }
        }
        // console.log(varyObj);
        let newCell = document.createElement("td");
        newCell.classList.add(vary);
        let newA = document.createElement("a");
        if ("text" in varyObj) {
            newA.classList.add('txt');
            newA.innerText = varyObj.text;
        }
        let newRef = document.createElement("a");
        newTarg = document.createElement("a");
        if ("ref" in varyObj) {
            newRef.classList.add('ref');
            newRef.value = varyObj.ref;
            console.log(newRef.value);
            newRef.innerText = newRef.value;

            if (varyObj.ref in refTarg) {
                // newTarg.classList.add('targ');
                // newTarg.value = refTarg[varyObj.ref];
                // console.log(newTarg.value);
                newA.value = refTarg[varyObj.ref];
                console.log(newA.value);
            }
        }
        newCell.appendChild(newA);
        newCell.appendChild(newRef);
        // newCell.appendChild(newTarg);
        newRw.appendChild(newCell);
    })
    thgn.appendChild(newRw)
});

const lnks = document.querySelectorAll('.ref');
// const lnk = $('.ref');
console.log("length is", lnks);

// const mouseEnter = (e) => {
//     // alert(`hovered on h1`);
//     console.log("mouse enterd ref");
//     // e.

//     // let targ = document.querySelector('.targ');
//     let targ = e.target.parentNode.querySelector('.targ');
//     // let targ = e.target.parentNode.querySelector('.txt');
//     // targ.style.visibility = "visible";
//     // targ.text = "target"
//     // console.log(targ.value);
//     if (targ.value) {
//         targ.text = targ.value;
//         // targ.text, targ.value = targ.value, targ.text;
//     }
//     targ.addEventListener('mouseout', mouseExit);

//     e.target.text = "";
// };
// const mouseExit = (e) => {
//     // alert(`hovered on h1`);
//     console.log("mouse exited targ");
//     // let targ = document.querySelector('.targ');
//     // let targ = e.target.parentNode.querySelector('.txt')
//     let targ = e.target.parentNode.querySelector('.ref')
//     // targ.style.visibility = "hidden";
//     // targ.text = targ.value;
//     // console.log(targ);
//     // console.log(targ.value);
//     if (targ.value) {
//         targ.text = targ.value;
//     }
//     e.target.text = "";
// };

const refToggle = (e) => {
    let targ = e.target.parentNode.querySelector('.txt');
    console.log(targ.value, targ.text);
    let oldTxt = targ.text;
    let oldVal = targ.value;
    targ.text = oldVal;
    targ.value = oldTxt;
    console.log(targ.value, targ.text);
    console.log("mouse clicked ref");
}

lnks.forEach(lnk => {
    lnk.addEventListener('click', refToggle);
    // lnk.addEventListener('mouseenter', mouseEnter);
});