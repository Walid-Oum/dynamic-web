'use strict'


let specials = document.getElementsByClassName('special'); 
for(let el of specials){
    el.style.color = 'red'

 
}


let paragrafen = document.getElementsByTagName('p')[1].style.textDecoration = "underline"


let divEl = document.getElementById('output')

divEl.textContent = specials.length

