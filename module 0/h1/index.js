"use strict"



let button = document.getElementById("themaKnop")

button.addEventListener("click", function(){
    document.body.classList.toggle("dark")

    if(document.body.classList.contains("dark")){
        button.textContent = "light mode"; 

    }
    else{
        button.textContent = "Donker thema"
    }
})