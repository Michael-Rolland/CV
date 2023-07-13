console.log("test");

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const input = document.getElementById('name').value;
  const message = `Salut ${input}!<br><br>Tu peux m'écrire à michael@devoji.com.<br>Tu peux également visiter le site <a href="https://www.devoji.com">www.devoji.com</a>.`;


  const customAlert = document.createElement('div');
  customAlert.classList.add('custom-alert');
  customAlert.innerHTML = message;

  document.body.appendChild(customAlert);

  setTimeout(() => {
    customAlert.remove();
  }, 10000);
});
