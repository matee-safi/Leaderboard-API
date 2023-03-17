const list = document.querySelector('tbody');

const render = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HW6Rm5sf6ZsLRuJNGtLy/scores/');
    const data = await response.json();

    list.innerHTML = '';
    for (let i = 0; i < data.result.length; i += 1) {
      const listItem = document.createElement('tr');
      listItem.innerHTML = `
            <td>${data.result[i].user}</td>
            <td>${data.result[i].score}</td>
        `;
      list.appendChild(listItem);
    }
  } catch (error) {
    console.log('rejected', error);
  }
};

export default render;
