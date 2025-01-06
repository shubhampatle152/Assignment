const button = document.getElementById('colorbutton');
const listItems = document.querySelectorAll('#fruitList li');


function getRandomColor() {
  const red = Math.floor(Math.random() * 256);  
  const green = Math.floor(Math.random() * 256); 
  const blue = Math.floor(Math.random() * 256);  
  
  return `rgb(${red}, ${green}, ${blue})`;        
}

function changeRandomBackgroundColors() {
  listItems.forEach((item) => {
    item.style.backgroundColor = getRandomColor();
  });
}

button.addEventListener('click', changeRandomBackgroundColors);
