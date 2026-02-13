let btn = document.getElementById("bereken")

btn.addEventListener("click", function () {

    let getal1;
    let getal2;
    let operator;
    let resultaat;

    getal1 = Number(document.getElementById("getal1").value);
    getal2 = Number(document.getElementById("getal2").value);
    operator = document.getElementsByTagName("span")[0].textContent.trim();



    //voor later als ik een echte calculator ga maken

    switch (operator) {
        case "+":
             resultaat = getal1 + getal2;
            break;
        case "-":
             resultaat = getal1 - getal2;
            break;
        case "/":
             resultaat = getal1 / getal2;
            break;
        case "*":
            resultaat = getal1 * getal2;
            break;
    }

    document.getElementById("resultaat").textContent = resultaat.toFixed(telDecimalen(getal1, getal2))


})




function telDecimalen(getal1, getal2){
    let grootsteGetal = (getal1.toString().length > getal2.toString().length) ? getal1 : getal2; 
    let decimalen = grootsteGetal.toString().split(".")[1].length; 

    return decimalen; 



}




