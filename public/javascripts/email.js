window.onload = function(){

const btn = document.querySelector('button');
const title = document.querySelector('h2')
const form = document.getElementById('form')
const overlay = document.querySelector('.overlay')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerText = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_91la1d3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      title.innerText = 'El mail se envio correctamente!'
      form.style.display = 'none'
      overlay.style.padding = '300px 0'

    }, (err) => {
      alert(JSON.stringify(err));
    });
});
}