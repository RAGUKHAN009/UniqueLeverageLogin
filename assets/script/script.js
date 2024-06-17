const form = document.getElementById('Form');
const usernameInput = document.getElementById('Username');
const passwordInput = document.getElementById('Password');
const loginButton = document.getElementById('LoginButton');
const ERROR1 = document.getElementById('ERROR1');
const ERROR2 = document.getElementById('ERROR2');
const Nav = document.getElementById('Nav');

function validateForm() {
  const username = usernameInput.value;
  const password = passwordInput.value;

  const isUsernameValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
  const isPasswordValid = password.length >= 8;

  if (isUsernameValid) {
    loginButton.removeAttribute('disabled');
    ERROR1.classList.remove('ERRU')
    ERROR1.classList.add('SUCU')
  } else {
    loginButton.setAttribute('disabled', '');
    ERROR1.classList.add('ERRU')
    ERROR1.classList.remove('SUCU')
    Nav.classList.remove('displayN')
    Nav.classList.add('displayB')
  }

  if (isPasswordValid) {
    loginButton.removeAttribute('disabled');
    ERROR2.classList.remove('ERRP')
    ERROR2.classList.add('SUCP')
  } else {
    loginButton.setAttribute('disabled', '');
    ERROR2.classList.add('ERRP')
    ERROR2.classList.remove('SUCP')
  }

}

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);


const Reload = document.getElementById('Reload')

Reload.addEventListener('click', () => {
  location.reload();
});