let msg = document.getElementById('loadingMessage'); 

window.addEventListener('load', function(){
    msg.textContent = 'welkom!';
    setTimeout(function(){
                msg.textContent = ''; 
    }, 
2000)

    




})