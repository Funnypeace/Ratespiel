let questions = [];
let currentQuestionIndex = 0;
let score = parseInt(localStorage.getItem('score')) || 0;
let username = localStorage.getItem('username') || '';
let currentCategory = 'all';

async function loadQuestions() {
  const response = await fetch('data/questions.json');
  const data = await response.json();
  questions = data.fragen;
}

function showQuestion() {
  const filtered = currentCategory === 'all'
    ? questions
    : questions.filter(q => q.kategorie === currentCategory);
  if (filtered.length === 0) return;
  currentQuestionIndex = currentQuestionIndex % filtered.length;
  const q = filtered[currentQuestionIndex];
  document.getElementById('question').textContent = q.frage;
  const buttons = document.querySelectorAll('#answers button');
  buttons.forEach((btn, idx) => {
    btn.textContent = q.optionen[idx];
    btn.onclick = () => checkAnswer(q.optionen[idx]);
  });
  updateScore();
}

function checkAnswer(answer) {
  const filtered = currentCategory === 'all'
    ? questions
    : questions.filter(q => q.kategorie === currentCategory);
  const q = filtered[currentQuestionIndex];
  if (answer === q.antwort) {
    score += 10;
    localStorage.setItem('score', score);
  }
  currentQuestionIndex = (currentQuestionIndex + 1) % filtered.length;
  showQuestion();
}

function updateScore() {
  const level = Math.floor(score / 100) + 1;
  document.getElementById('score').textContent = `Punkte: ${score} | Level: ${level}`;
}

function initProfile() {
  if (!username) {
    username = prompt('Bitte Benutzernamen eingeben:');
    localStorage.setItem('username', username);
  }
  document.getElementById('username').textContent = username;
}

window.addEventListener('DOMContentLoaded', async () => {
  initProfile();
  await loadQuestions();
  showQuestion();
  document.getElementById('profileBtn').addEventListener('click', () => {
    document.getElementById('profile').classList.toggle('hidden');
  });
  document.getElementById('startBtn').addEventListener('click', () => {
    document.getElementById('profile').classList.add('hidden');
    showQuestion();
  });
  document.getElementById('categorySelect').addEventListener('change', e => {
    currentCategory = e.target.value;
    currentQuestionIndex = 0;
    showQuestion();
  });
});
