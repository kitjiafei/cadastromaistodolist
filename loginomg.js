let email = document.getElementById('email');
let senha = document.getElementById('senha');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');

form.addEventListener('submit', (e) => {
        if (email.value == '' && senha.value == '') {
            textForm.textContent = 'Você deve preencher os campos!'
        } else if(validatorEmail(email.value) === true && validatorPassword(senha.value) === true){
            console.log(email.value);
            console.log(senha.value);  
            textForm.textContent = '';
            textEmail.textContent = '';
            textPassword.textContent = '';
        } else {
            console.log('Requisição não atendida.')
        } 
        e.preventDefault();
    })

    email.addEventListener('keyup', () =>{
        if(validatorEmail(email.value) !== true){
            textEmail.textContent = "O formato do e-mail deve ser ex: email@.com!"
        } else{
            textEmail.textContent = '';
        }
    })
    senha.addEventListener('keyup', () =>{
        if(validatorPassword(senha.value) !== true){
            textPassword.textContent = "A senha precisa ter 5 ou mais caracteres, um símbolo ex: '@', com números e letras!";
        } else{
            textPassword.textContent = '';
        }
    })
    
function validatorEmail(email){
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }
  
  function validatorPassword(senha) {
    let senhaPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return senhaPattern.test(senha);
  }

 function confereSenha(){
    const senha = document.querySelector('input[id=senha]');
    const confirma = document.querySelector('input[id=confirma_senha]');

    if (confirma.value === senha.value){
        confirma.setCustomValidity('');
    } else {
        confirma.setCustomValidity('As senhas não coincidem. Corrija.')
    }
 }

 function entrar(){
    let usuario = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        email: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(usuario.value == item.emailCad && senha.value == item.senhaCad){ 
            userValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })
    if(usuario.value == userValid.email && senha.value == userValid.senha){
    window.location.href= 'cats.html'
            let mathRandom = Math.random().toString(16).substr(2)
            let token = mathRandom + mathRandom
            
            localStorage.setItem('token', token)
            localStorage.setItem('emailLogado', JSON.stringify(userValid))
            console.log (token)
           localStorage.setItem('emailLogado', JSON.stringify(userValid))
    } else {
        email.focus()
    }
 }
