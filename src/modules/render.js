const list = document.querySelector('.table');

const render = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HW6Rm5sf6ZsLRuJNGtLy/scores/');
    const data = await response.json();

    list.innerHTML = '';
    for (let i = 0; i < data.result.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `${data.result[i].user}: ${data.result[i].score}`;
      list.appendChild(listItem);
    }
  } catch (error) {
    console.log('rejected', error);
  }
};

export default render;
