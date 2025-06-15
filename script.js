
const button = document.getElementById("joke-btn");
const jokeBox = document.getElementById("joke-box");
const contentEl = document.getElementById("joke-content");
const answerEl = document.getElementById("joke-answer");
button.addEventListener("click", async () => {
    try {
          const res = await fetch(
            "https://api-blagues-carambar.onrender.com/api/v1/jokes/random"
          );
          const data = await res.json();
          contentEl.textContent = data.content;
          answerEl.textContent = data.answer;
          jokeBox.style.display = "block";
        } catch (err) {
          contentEl.textContent = "Oups ! Impossible de charger une blague.";
          answerEl.textContent = "";
          jokeBox.style.display = "block";
        }
    });      