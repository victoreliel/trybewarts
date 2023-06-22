const signIn = document.getElementById('button-entrar');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const formResult = document.getElementById('form-data');
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const formEmail = document.getElementById('input-email');
const houseForm = document.getElementById('house');
const subjectForm = document.getElementsByClassName('subject');
const evaluationForm = document.getElementById('evaluation-form');

signIn.addEventListener('click', () => {
  if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const habilitaEnvio = (event) => {
  if (event.target.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

agreementCheck.addEventListener('click', habilitaEnvio);

const contador = () => {
  const character = textArea.value.length;
  const count = 500 - character;

  counter.innerHTML = `${count} caracteres restantes`;

  if (count === 0) {
    alert('Isso não é uma redação do ENEM!!!');
  }
};

textArea.addEventListener('keyup', contador);

const checkedSubjects = () => {
  const subjectsArray = [];
  let subjectsArrayStr = '';
  for (let index = 0; index < subjectForm.length; index += 1) {
    if (subjectForm[index].checked === true) {
      subjectsArray.push(`${subjectForm[index].value}, `);
    }
  }
  for (let index2 = 0; index2 < subjectsArray.length; index2 += 1) {
    subjectsArrayStr += subjectsArray[index2];
  }
  return subjectsArrayStr;
};

const criaForm = () => {
  const familyInput = document.querySelector('input[name = family]:checked');
  const note = document.querySelector('input[name = rate]:checked');
  const nome = `Nome: ${name.value} ${lastName.value}`;
  const emailForm = `Email: ${formEmail.value}`;
  const house = `Casa: ${houseForm.value}`;
  const familia = `Família: ${familyInput.value}`;
  const materias = `Matérias: ${checkedSubjects()}`;
  const evaluation = `Avaliação: ${note.value}`;
  const observation = `Observações: ${textArea.value}`;
  const finalForm = [nome, emailForm, house, familia, materias, evaluation, observation];

  for (let index = 0; index < finalForm.length; index += 1) {
    const date = document.createElement('p');
    date.innerText = finalForm[index];
    formResult.appendChild(date);
  }
};

const formFinal = (event) => {
  event.preventDefault();
  criaForm();
  evaluationForm.style.display = 'none';
  formResult.classList.toggle('sumico');
};

evaluationForm.addEventListener('submit', formFinal);
