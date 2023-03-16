const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const submit = (e) => {
  e.preventDefault();
  if (nameInput.value && scoreInput.value) {
    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HW6Rm5sf6ZsLRuJNGtLy/scores/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    nameInput.value = '';
    scoreInput.value = '';
  }
};

export default submit;
