window.onload = function () {

  const inputs = document.querySelectorAll('.inputs')
  const error = document.querySelectorAll('.error')
  const btn = document.querySelector('button');
  const title = document.querySelector('h2')
  const form = document.getElementById('form')
  const overlay = document.querySelector('.overlay')

  expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  function validacion(e) {
    switch (e.target.name) {
      case 'emailjs_name':
        if (e.target.value == '') {
          document.querySelector('.grupo-name').classList.add('error-validation')
          document.querySelector('.grupo-name p').innerText = 'El campo no puede estar vacio'
        } else {
          document.querySelector('.grupo-name').classList.remove('error-validation')
          document.querySelector('.grupo-name p').innerText = ''
        }
        break;
      case 'emailjs_surname':
        if (e.target.value == '') {
          document.querySelector('.grupo-surname').classList.add('error-validation')
          document.querySelector('.grupo-surname p').innerText = 'El campo no puede estar vacio'
        } else {
          document.querySelector('.grupo-surname').classList.remove('error-validation')
          document.querySelector('.grupo-surname p').innerText = ''
        }
        break;
      case 'emailjs_email':
        if (e.target.value == '') {
          document.querySelector('.grupo-email').classList.add('error-validation')
          document.querySelector('.grupo-email p').innerText = 'El campo no puede estar vacio'
        } else if (expresiones.email.test(e.target.value) == false) {
          document.querySelector('.grupo-email').classList.add('error-validation')
          document.querySelector('.grupo-email p').innerText = 'El email ingresado no es valido'
        } else {
          document.querySelector('.grupo-email').classList.remove('error-validation')
          document.querySelector('.grupo-email p').innerText = ''
        }
        break;
      case 'emailjs_cel':
        if (e.target.value == '') {
          document.querySelector('.grupo-celular').classList.add('error-validation')
          document.querySelector('.grupo-celular p').innerText = 'El campo no puede estar vacio'
        } else {
          document.querySelector('.grupo-celular').classList.remove('error-validation')
          document.querySelector('.grupo-celular p').innerText = ''
        }
        break;
      case 'emailjs_msg':
        if (e.target.value == '') {
          document.querySelector('.grupo-consulta').classList.add('error-validation')
          document.querySelector('.grupo-consulta p').innerText = 'El campo no puede estar vacio'
        } else {
          document.querySelector('.grupo-consulta').classList.remove('error-validation')
          document.querySelector('.grupo-consulta p').innerText = ''
        }
        break;
    }
  }

  inputs.forEach(function (input) {
    input.addEventListener('keyup', validacion)
  })

  document.getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      let contadorError = 0

      error.forEach(function (err) {
        if (err.innerText != '') {
          contadorError += 1
        }
      })
      console.log(contadorError)

      inputs.forEach((input) => {
        if (input.value == '' || contadorError > 1) {
          document.querySelector('.error-all p').innerText = 'Los datos ingresados estan incompletos o son incorrectos'
          contadorError += 1
        } else {
          document.querySelector('.error-all p').innerText = ''
          contadorError = 0
        }
      })

      if (contadorError == 0) {
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
      }
    });
}