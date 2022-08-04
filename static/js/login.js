
const vissibilityToggle = document.querySelector('.vissibility');

const input = document.querySelector('.visibility input');

var password = true;

vissibilityToggle.addEventListener('click', function() {
  if (password) {
    input.setAttribute('type', 'text');
    vissibilityToggle.innerHTML = 'vissibility';
  } else {
    input.setAttribute('type', 'password');
    vissibilityToggle.innerHTML = 'vissibility_off';
  }
  password = !password;
  
});