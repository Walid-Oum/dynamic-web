'use strict'


let nav = document.getElementById('mainMenu');
let mainUl = document.createElement('ul'); //hoofdlijst



nav.appendChild(mainUl);



let headers = document.querySelectorAll('.content h1, .content h2');




let currentLi = null; //de laatste toegevoegde h1, zodat eventuele h2's daaronder kunnen hangen 
let subUl = null; //sublijst binnen h1, voor eventuele h2's


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


/**
 * voegt h1 aan de hoofdlijst
 * - maakt een li + a element aan en geeft de header in de pagina een id (om ernaartoe te scrollen)
 */


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
    subUl = null; //subul reseten want nieuwe h1 -> nieuwe sublijst 

}

/**
 * (voor later: extra check op textcontent deel 2.1 hangt bvb onder hoofdstuk 2)
 */
function voegH2Toe(header, currentLi) {

    if(!currentLi){return}//geen h1 dus ook geen sublijst aanmaken
    if (!subUl) { //maak een sublijst als die nog niet bestaat
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





















