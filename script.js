let currentColor = 'black';

function populatePixelBoard(size) {
  const board = document.getElementById('pixel-board');
  board.style.setProperty('--size', size);
  var fc = board.firstChild;

  while (fc) {
    board.removeChild(fc);
    fc = board.firstChild;
  }

  for (let i = 0; i < size * size; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.innertHtml = '&nbsp;';
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', function (e) {
      pixel.style.backgroundColor = currentColor;
    });

    board.appendChild(pixel);
  }
}

function selectColor(e) {
  document.querySelectorAll('.color').forEach(function (el) {
    el.classList.remove('selected')
  });

  e.target.classList.add('selected');
  currentColor = e.target.style.backgroundColor;
}

function populatePallete() {
  const palleteBoard = document.getElementById('color-palette');

  const pallete = document.createElement('li');
  pallete.className = 'color selected';
  pallete.innertHtml = '&nbsp;';
  pallete.style.backgroundColor = 'black';

  pallete.addEventListener('click', function (e) {
    selectColor(e);
  });

  palleteBoard.appendChild(pallete);

  for (let i = 0; i < 3; i++) {
    const pallete = document.createElement('li');
    pallete.className = 'color';
    pallete.innertHtml = '&nbsp;';
    const color = Math.floor(Math.random() * 16777215).toString(16);
    pallete.style.backgroundColor = `#${color}`;

    pallete.addEventListener('click', function (e) {
      selectColor(e);
    });

    palleteBoard.appendChild(pallete);
  }
}

const size = document.getElementById('board-size').value;
populatePallete();
populatePixelBoard(size);

document.getElementById('clear-board').addEventListener('click', function (e) { populatePixelBoard(document.getElementById('board-size').value); });
document.getElementById('generate-board').addEventListener('click', function () {
  let size = document.getElementById('board-size').value;
  window.alert('Board inválido!');
  if (typeof size === 'undefined') {
    window.alert('Board inválido!');
  } else {
    if (size < 5) size = 5;
    if (size > 50) size = 50;

    populatePixelBoard(size);
  }
});
