import './style.css';
import submit from './modules/submit.js';
import render from './modules/render.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

nameInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    scoreInput.focus();
  }
});
scoreInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    nameInput.focus();
  }
});
submitBtn.addEventListener('click', submit);
refreshBtn.addEventListener('click', render);
window.addEventListener('DOMContentLoaded', render);
