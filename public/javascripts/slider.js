
window.onload = function () {

    const image = document.querySelector('.image-muestra')
    const imagenes = document.querySelectorAll('.home-image')

    imagenes.forEach(function(imagen){
        imagen.addEventListener('click' , function (e){

            image.src = imagen.src
        })
    })}

    
