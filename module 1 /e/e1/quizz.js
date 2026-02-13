let naam = prompt("Wat is jouw naam? ")

let score = 0;



let antwoord1 = prompt("Hoofdstad van Belgie: ")


if (antwoord1.toLowerCase().trim() == 'brussel') {
    alert('nice!')
    score++

}
else {
    alert('oei oei oei, goeie antwoord was Brussel :(')
}





let antwoord2 = prompt("Wie is de hoofdpersonnage in naruto shippuden? ")

if (antwoord2.toLowerCase().trim() == 'naruto') {
    alert('nice!')
    score++

}
else {
    alert('bro... :(')
}



let antwoord3 = prompt("Wat heb je liever? katten of honden? ")
if (antwoord3.toLowerCase().trim() == 'katten') {
    alert('nice!')
    score++

}
else {
    alert('ew :(')
}




alert(` well well well ${naam}, looks like you got ${score}/3 ` )




















