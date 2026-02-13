//box elementen 



let boxjes = document.getElementsByClassName('box')
let colors = ['blue', 'red', 'green']

for (let box of boxjes) {

    box.addEventListener('click', function () {
        if(!box.classList.contains('green')){
        changeColor(box, 'blue')}
    
    })
    box.addEventListener('dblclick', function () {
        changeColor(box, 'green')
    
    })
    box.addEventListener('mouseenter', function () {
        if(!box.classList.contains('blue') && !box.classList.contains('green'))
        changeColor(box, 'red')
    
    })

}




function changeColor(box, color) {

    if (colors.includes(color) && !box.classList.contains(color)) {
        box.classList.remove(...colors)
        box.classList.add(color)

    }

}
