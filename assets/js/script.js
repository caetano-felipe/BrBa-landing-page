let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
  let txtNome = document.querySelector('.txtNome');

  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido';
    txtNome.style.color = '#ff0000';
  } else {
    txtNome.innerHTML = 'Nome Válido';
    txtNome.style.color = '#009900';
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('.txtEmail');

  if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    txtEmail.innerHTML = 'E-mail inválido';
    txtEmail.style.color = '#ff0000';
  } else {
    txtEmail.innerHTML = 'E-mail válido';
    txtEmail.style.color = '#009900';
    emailOk = true;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('.txtAssunto');

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres';
    txtAssunto.style.color = '#ff0000';
    txtAssunto.style.display = 'block';
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk === true && emailOk === true && assuntoOk === true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar...')
  }
}