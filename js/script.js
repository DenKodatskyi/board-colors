const board = document.querySelector('#board');
const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'violet', 'orchid', 'darkcyan']
const SQUARES_NUMBER = 1540;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
  
};

const setColor = (elem) => {
  const color = getRandomColor()
  elem.style.backgroundColor = color
  elem.style.boxShadow = `0 0 3px ${color}, 0 0 20px ${color}`
};

const removeColor = (elem) => {
  elem.style.backgroundColor = '#1d1d1d';
  elem.style.boxShadow = `0 0 3px red`
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
};

