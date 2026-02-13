console.log("I'm here")

let button = document.getElementById("button1"); 

button.addEventListener("click", function(){
    this.textContent = (this.textContent == "Hallo!") ? "Tot ziens!" : "Hallo!";
})