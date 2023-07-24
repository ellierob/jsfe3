// es module export statement can be placed anywhere in module
export {exported,thiser};

// default export only available with function definition
export default
// module.exports.default =

()=>
// function defaultexport() 
{ return 'successfully exported and imported default export';}

const exported = ()=>
// function exported() 
{ return 'successfully exported and imported exported function';}

const unexported = ()=>
// function unexported() 
{ return 'successfully exported and imported unexported import';}

// const thiser = ()=>
function thiser() 
{ 
    // typeof 'this'/caller of a functions, the module, is object
    return JSON.stringify(this);
} 

// cjs module exports must be after function declarations
// module.exports = {exported:exported}
// module.exports.default = defaultexport



// console.log(
//     exports, '\n', 
//     module.exports, '\n'
//     // when an exported module is passed to a require function it returns
//     // module object to calling import module
//     , module
//     );


//string = 'dog, cat';
//string += ', bird';

//console.log(string);

//playerIntro = 'My name is ';

//prompt = require('prompt-sync')({sigint: true});

//playerName = prompt(playerIntro);

//playerIntro = playerIntro + playerName;

//console.log(playerIntro)
