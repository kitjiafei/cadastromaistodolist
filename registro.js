
let email = document.getElementById('email');
let validEmail = false
let senha = document.getElementById('senha');
let validSenha = false
let confirma_senha = document.getElementById('confirma_senha');
let validConfirmaSenha = false
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let textPassword2 = document.getElementById('textPassword2')

form.addEventListener('submit', (e) => {
        if (email.value == '' && senha.value == '' && confirma_senha.value == '') {
            textForm.textContent = 'Você deve preencher os campos!'
        } else if(validatorEmail(email.value) === true && validatorPassword(senha.value) === true && validatorPassword2(confirma_senha.value )=== true){
            console.log(email.value);
            console.log(senha.value);  
            textForm.textContent = '';
            textEmail.textContent = '';
            textPassword.textContent = '';
            textPassword2.textContent = '';
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
            validEmail = true;
        }
    })
    senha.addEventListener('keyup', () =>{
        if(validatorPassword(senha.value) !== true){
            textPassword.textContent = "A senha precisa ter 5 ou mais caracteres, um símbolo ex: '@', com números e letras!";
        } else{
            textPassword.textContent = '';
            validSenha = true;
        }
    })
    confirma_senha.addEventListener('keyup', () =>{
        if(validatorPassword2(confirma_senha.value) !== true){
            textPassword2.textContent = "A senha precisa ter 5 ou mais caracteres, um símbolo ex: '@', com números e letras!";
        } else{
            textPassword2.textContent = '';
            validConfirmaSenha = true;
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

  function validatorPassword2(confirma_senha) {
    let confirma_senhaPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return confirma_senhaPattern.test(confirma_senha);
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

 function TudoOK(){
    if(validEmail == false || validSenha == false || validConfirmaSenha == false){

    } else {
        
 let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

 listaUser.push(
    {
        emailCad: email.value,
        senhaCad: senha.value

    }
 )

localStorage.setItem('listaUser', JSON.stringify(listaUser))
    setTimeout(()=>{
    window.location.href = "login.html";}, 3000)
    }
}
    function mostra(){
        localStorage.setItem(listaUser.value, token.value);
    var localhos = localStorage.getItem(listaUser.value);
    document.body.querySelector("#dado").innerHTML = localhos;
}

