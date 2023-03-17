const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const submit = async (e) => {
  e.preventDefault();
  if (nameInput.value && scoreInput.value) {
    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HW6Rm5sf6ZsLRuJNGtLy/scores/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
    nameInput.value = '';
    scoreInput.value = '';
  }
};

export default submit;
