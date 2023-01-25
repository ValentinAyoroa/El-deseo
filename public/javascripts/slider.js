
window.onload = function () {

    const image = document.querySelector('.image-muestra')
    const imagenes = document.querySelectorAll('.home-image')
    const imagenesMuestra = document.querySelectorAll('.home-image-muestra')
    const btn = document.querySelector('.mostrar-mas');
    const passBtn = document.querySelectorAll('.button-muestra button')
    let contador = 1
    
    imagenes.forEach(function(imagen){
        imagen.addEventListener('click' , (e) => {

            image.src = imagen.src
        })
    })

    btn.addEventListener('click', (e) => {
        imagenesMuestra.forEach((img) => {

            img.style.display = 'block'

            btn.style.display = 'none'

            img.addEventListener('click' , (e) => {

                image.src = img.src
            })

        })
    })

    passBtn.forEach(function(btn){
        btn.addEventListener('click' , (e) => {

            if(btn.innerText == 'Siguiente' && contador < 13 ){
                contador = contador + 1
                image.src = '/images/Eldeseo'+ contador +'.jpg'

            }else if(btn.innerText == 'Anterior' && contador > 1){
                contador = contador - 1
                image.src = '/images/Eldeseo'+ contador +'.jpg'
            }
            
        })
    })

} 


