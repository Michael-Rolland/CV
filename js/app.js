console.log("test");

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre

  const input = document.getElementById('name').value;
  const message = `Salut ${input} !\nTu peux m'écrire à michael@devoji.com`;

  alert(message);
});
