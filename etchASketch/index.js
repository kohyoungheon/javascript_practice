document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.container');

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.style.display = 'flex';
    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
      let cell = document.createElement('div');
      cell.style.border = '1px solid black';
      cell.style.height = '20px'; // Set height as needed
      cell.style.width = '20px'; // Set width as needed
      cell.style.backgroundColor = 'white';
      cell.classList.add("cell")
      row.appendChild(cell);
    }
  }

  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell)=>{
    cell.addEventListener('mouseover', () => {
      if (cell.getAttribute('data-clicked')) {
        return;
      }
      cell.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  // On hover, apply semi-transparent black color
      cell.style.backgroundBlendMode = 'darken';  // Use 'darken' blend mode
    });

    cell.addEventListener('mouseout', () => {
      if (cell.getAttribute('data-clicked')) {
        return;
      }
      cell.style.backgroundColor = 'white';  // On mouseout, revert to original color
      cell.style.backgroundBlendMode = 'normal';  // Revert blend mode to normal
    });

    cell.addEventListener('click', (e) => {
      cell.style.backgroundColor = getRandomColor();  // On mouseout, revert to original color
      cell.style.backgroundBlendMode = 'normal';  // Revert blend mode to normal
      cell.setAttribute('data-clicked', 'true');
      console.log(e.target);
    });

  });

});
