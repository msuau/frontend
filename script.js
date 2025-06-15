const jokeBtn = document.getElementById('jokeBtn');
const jokeContent = document.getElementById('jokeContent');
const jokeAnswer = document.getElementById('jokeAnswer');

const API_URL = 'https://api-blagues-carambar.onrender.com/api/v1/jokes/random';

jokeBtn.addEventListener('click', async () => {
jokeContent.textContent = 'Chargement de la blague...';
jokeAnswer.textContent = '';
try {
const response = await fetch(API_URL);
const joke = await response.json();
jokeContent.textContent = joke.content || 'Oups ! Blague introuvable.';
jokeAnswer.textContent = joke.answer || '';
jokeBtn.textContent = 'Tirer une autre blague';
} catch (error) {
console.error(error);
jokeContent.textContent = 'Erreur lors du chargement de la blague.';
}
});