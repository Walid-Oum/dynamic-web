'use strict'


let nav = document.getElementById('mainMenu');
let mainUl = document.createElement('ul');



nav.appendChild(mainUl);



let headers = document.querySelectorAll('.content h1, .content h2');




let currentLi = null;
let subUl = null;


for (let header of headers) {

    //tagname retourneet in uppercase (H1 en H2)
    switch (header.tagName.toLowerCase()) {

        case 'h1':
            voegH1Toe(header);
            break;
        case 'h2':
            voegH2Toe(header, currentLi);
            break;

    }
}


function voegH1Toe(header) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let headername = header.textContent;
    let newId = `${headername}`.toLowerCase().trim().replaceAll(" ", "-");
    header.id = newId;
    a.href = `#${newId}`;
    a.textContent = headername;

    mainUl.appendChild(li);
    li.appendChild(a);
    currentLi = li
    subUl = null; 

}


function voegH2Toe(header, currentLi) {

    if(!currentLi){return}
    if (!subUl) {
        subUl = document.createElement("ul");
        currentLi.appendChild(subUl)
    }

    let li = document.createElement('li');
    let a = document.createElement('a');
    let headername = header.textContent;
    let newId = `${headername}`.toLowerCase().trim().replaceAll(" ", "-");
    header.id = newId;
    a.href = `#${newId}`;
    a.textContent = headername;
    subUl.appendChild(li).appendChild(a);




}





















