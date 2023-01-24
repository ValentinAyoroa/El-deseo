
window.onload = function () {

    const image = document.querySelector('.image-muestra')
    const imagenes = document.querySelectorAll('.home-image')
    const imagenesMuestra = document.querySelectorAll('.home-image-muestra')
    const btn = document.querySelector('.mostrar-mas');
    const passBtn = document.querySelectorAll('.container-muestra p')
    
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
        let contador = 1
        btn.addEventListener('click' , (e) => {
            if(btn.innerText == '>'){
                contador = contador + 1
                image.src = '/images/Eldeseo'+ contador +'.jpg'

            }else if(btn.innerText == '<'){
                click = click - 1 
                console.log(click);
                image.src = '/images/Eldeseo'+ click +'.jpg'
            }
            
        })
    })

} 


