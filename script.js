const jokeBtn = document.getElementById('jokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

const API_URL = 'https://api-blagues-carambar.onrender.com/api/v1/jokes/random';

jokeBtn.addEventListener('click', async () => {
jokeDisplay.textContent = 'Chargement de la blague...';
try {
const res = await fetch(API_URL);
const joke = await res.json();
jokeDisplay.textContent = joke.content + '&bsp'  + joke.answer || 'Oops ! Blague introuvable.';
} catch (error) {
console.error(error);
jokeDisplay.textContent = 'Erreur lors du chargement de la blague.';
}
});