// required for jquery
//'use strict'

// javascript DOM selector
const divNew = document.createElement('div');
const paraNew = document.createElement('p');
const inp = document.createElement('input');
const chk = document.createElement('input');
const radNew = document.createElement('input');

divNew.id = 'div1';
paraNew.classList.add('p1', 'p3');
divNew.style.color = 'red';
console.log(divNew.style.color);
chk.type = 'checkbox';
chk.id = 'chk1';
radNew.name = 'rad';
radNew.type = 'radio';

document.body.insertAdjacentElement('beforeend', divNew);
document.body.insertAdjacentElement('beforeend', paraNew);
document.body.insertAdjacentElement('beforeend', paraNew.cloneNode());
document.body.insertAdjacentElement('beforeend', paraNew.cloneNode());
divNew.insertAdjacentElement('beforebegin', inp);
divNew.insertAdjacentElement('afterend', chk)

divNew.textContent = 'set by javascript DOM selector';
document.querySelectorAll('.p1').forEach(p => {
    //const span = ;
    p.innerHTML = '<span>';
    p.querySelector('span').textContent = `set by javascript`;
    //$('.p2').html($('<span>').text(`set by jquery`));
    p.insertAdjacentElement('afterbegin', radNew.cloneNode());
});
paraNew.classList.remove('p3');
console.log(paraNew.classList.contains('p3'));

document.addEventListener('mouseover', (e) => {
    if (e.target === divNew) {
        e.target.style.color = 'purple';
    } else if (e.target.matches('.p1')) {
        e.target.style.color = 'purple';
    }
});

inp.addEventListener('keyup', (e) => {
    console.log('keyup', e.key);
    //divNew.textContent+=e.key;
});
inp.addEventListener('keydown', (e) => {
    console.log('keypress', e.key, e.which, inp2.val());
    //  checking ASCII keypress events which attribute
    if (e.which >= 48 && e.which <= 57) {
        // guard clause for prevents input element default e.which acceptance behavior
        e.preventDefault();
        inp.value += '!';
    }
});

inp.addEventListener('change', (e) => {
    // val() returns the value attribute input element
    divNew.textContent = inp.value;
})

chk.addEventListener('change', e => {
    if (e.target.checked) {
        console.log(e.target);
        divNew.textContent = inp.value;
    }
})

document.querySelectorAll('input[name="rad"]').forEach(r => {
    r.addEventListener('change', e => {
        console.log(e.target.nextElementSibling.textContent);
    })
})

paraNew.remove();

alert('working');

//jquery DOM selector
//import $ from './node_modules/jquery/dist/jquery.js';
//<head><script src='./node_modules/jquery/dist/jquery.js'></script>

// for new element, selector needs to be in arrow brackets
const divNew2 = $('<div>');
const paraNew2 = $(`<p>`);
const inp2 = $(`<input>`);
const chk2 = $(`<input>`);
const radNew2 = $('<input>')

divNew2.attr('id', 'div2');
paraNew2.addClass('p2 p4');
divNew2.css('color', 'red');
console.log(divNew2.css('color'));
chk2.attr('type', 'checkbox');
chk2.attr('id', 'chk2');
radNew2.attr('name', 'rad2');
radNew2.attr('type', 'radio');

$('body').append(divNew2);
paraNew2.appendTo($('body'));
paraNew2.clone().appendTo($('body'));
$('body').append(paraNew2.clone());
inp2.insertBefore(divNew2);
divNew2.after(chk2);

divNew2.html('<div>');
divNew2.text("set by jquery DOM selector");
$('.p2').html($('<span>').text(`set by jquery`)).prepend(radNew2);
paraNew2.removeClass('p4');
console.log(paraNew2.hasClass('p4'));

$(window).click((e) => {
    if ($(e.target).attr('id') === 'div2') {
        $(e.target).css('color', 'green');
        console.log($(e.target));
    } else if ($(e.target).hasClass('p2')) {
        $(e.target).slideUp().slideDown().animate({
            opacity: 0.25,
            margin: '20%'
        });
        console.log($(e.target));
    } else if ($(e.target) === inp2) {
        inp2.toggle();
        console.log($(e.target));
    }
});

inp2.keyup((e) => {
    console.log('keyup', e.key, e.which, inp2.val());
    //divNew2.text($(inp2).val())
});
inp2.keypress((e) => {
    console.log('keypress', e.key, e.which, inp2.val());
    if (e.which >= 48 && e.which <= 57) {
        e.preventDefault();
        inp2.val(inp2.val() + '!')
    }
});

inp2.change((e) => {
    // val() returns the value attribute input element
    divNew2.text($(inp2).val());
})

chk2.change(e => {
    if ($(e.target)[0].checked) {
        console.log($(e.target));
        divNew2.text($(inp2).val());
    }
})

$("input[name='rad2']").change(e => {
    console.log($(e.target).next('span').text());
})

paraNew2.remove();

try {
    console.log($('#div2').textContent);
    console.log(document.querySelector('#div1').text());
} catch (e) {
    console.log('node object methods not available on jquery object & jquery object methods not available on node objects')
}



alert('working');

const dropD = $('<select>');

$('body').prepend(dropD);

let yearCur = new Date().getFullYear();

for (let y = yearCur; y > yearCur - 100; y--) {
    $(dropD).append(`<option>${y}</option>`);
}

dropD.change(e => {
    if ($(e.target).val() > 1996) {
        e.preventDefault;
        console.log('too young!');
    }
})


const db2 = [
    {
        'name': 'rob',
        'age': 53
    },
    {
        'name': 'gob',
        'age': 33
    }
]

//import dbJSON from './db.json' assert {type: 'json'};

//let dbJSON = JSON.parse('./db.json');

//const db = dbJSON.map(i=>i) || db2;

//const db = './db.json' || db2;

let db = '';

try {
    // let req = new XMLHttpRequest();
    // req.onreadystatechange = function(){
    //     if(this.readyState===XMLHttpRequest.DONE && this.status === 200){
    //         db = this.response();
    //         console.log('got from local json', '\n', db);
    //     }
    // }
    // req.open('GET', './webapp/reactapp/javascript/db.json');
    // req.send();
    // const fetch = require('node-fetch')
    // fetch('../../db/JSON_db/db.json').then((response)=>response.json()).then((json)=>console.log(json));
    // console.log('fetched from JSON file \n', db)
} catch (e) {
    db = db2;
    console.log('not fetched from JSON file \n', db)
}

//import fs from './node_modules/file-saver/dist/FileSaver.js';

const tab = $('<table>');
let rowNum = 1;

tab.after()

const newRow = $(`<tr><td>${rowNum}</td><td>${'<input value="name">'}</td><td>${'<input value="age">'}</td></tr>`);

tab.append(newRow);

$('body').append(tab);

db.forEach(r => {
    newRow.before(`<tr><td>${rowNum}</td><td>${r.name}</td><td>${r.age}</td></tr>`);
    rowNum++;
    newRow.find('td').first().text(rowNum);
    console.log(rowNum, newRow.first('td'));
});

let nam = false;
let age = false;

newRow.on('change', e => {
    let rowNum = Number(newRow.find('td').first().text());
    if ($(e.target).attr('value') === 'name') {
        nam = $(e.target).val();
    } else if ($(e.target).attr('value') === 'age') {
        age = $(e.target).val();
    }
    if (!nam || !age) {
        console.log('define both');
    } else {
        newRow.before(`<tr><td>${rowNum}</td><td>${nam}</td><td>${age}</td></tr>`);
        rowNum++;
        newRow.html(`<td>${rowNum}</td><td><input value="name"></td><td><input value="age"></td>`);
        db.push({ 'name': nam, 'age': age });
        //try{
        //let dbJSON = JSON.stringify(db);
        //require(fs).writeFile('./db.json', dbJSON, 'utf8');
        //} catch(e){
        console.log(e);
        //}
        nam = false;
        age = false;
        console.log(db)
    }
})