// get first match
const blue = document.querySelector(".some > #toBeBlue")

blue.style.color="blue";

// gets the 2nd match with supplied selector
const red = document.querySelectorAll("h2")[1];

red.style.color="red";


// create new element
const newPar = document.createElement("p");

newPar.innerHTML = 'This is a new paragraph';


// place new element inside element
const myParent = document.querySelector('div');

myParent.appendChild(newPar)


// clone an element
let newPar2 = newPar.cloneNode(deep='false');

// prepend an element inside another element
red.prepend(newPar2);


// get all matches of supplied
const allH2 = document.querySelectorAll("p");

allH2.forEach((el) => { 
    //el.prepend('!!!');    
    el.style.fontStyle = 'italic'; 
})

//for (el of allH2) {     }


// API
//import fetch from "cross-fetch";

// get request  
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res);
        stat = res.status;
        // parses json response to object
        return res.json();
    })
    .then(data => {
        console.log(data);
        return data;    })
    //.then(data => {        return render(data);})
    .then(data=>{
        const insField = document.querySelector("#fetchIn");
        data.map(item=>{
            const ins = document.createElement("li");
            ins.textContent = `Name: ${item.name} |  UID: ${item.id}`;
            insField.append(ins);
        })
        
        
    })
    .catch(er => console.log(`Error ${stat}! Request Denied!`))




console.log('Ready?');
//async following lines do not wait for 
setTimeout(function(){console.log(`Don't wait for me!`);}, 3000);
console.log('go!')