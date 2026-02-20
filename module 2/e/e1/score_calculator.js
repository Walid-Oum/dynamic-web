'use strict';

let score = document.getElementById('score'); 
let addButton = document.getElementById('addScore'); 
let avg = document.getElementById('average');
let highest = document.getElementById('highest'); 
let scoreList = document.getElementById('scoreList'); 
let total = 0; 
let nieuweScores = []; 

addButton.addEventListener('click', function(){
    let getal = Number(score.value);
    update(getal); 
})

function update(getal){
    nieuweScores.push(getal); 
    total += getal; 
    avg.textContent = total/nieuweScores.length; 
    highest.textContent = (getal > Number(highest.textContent)) ? getal : highest.textContent; 

    let li = document.createElement('li'); 
    li.textContent = getal; 
    scoreList.appendChild(li); 
}