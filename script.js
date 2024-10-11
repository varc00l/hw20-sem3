const galleryItems = document.querySelectorAll('.image');
let currentIndex = 0;

const fullImageContainer = document.getElementById('fullImageContainer');
const fullImage = document.getElementById('fullImage');

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    fullImageContainer.style.display = 'flex';
    currentIndex = index;
  });
});

document.addEventListener('keydown', (event) => {
  if (fullImageContainer.style.display === 'flex') {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      fullImage.src = galleryItems[currentIndex].src;
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      fullImage.src = galleryItems[currentIndex].src;
    } else if (event.key === 'Escape') {
      fullImageContainer.style.display = 'none';
    }
  }
});

fullImageContainer.addEventListener('click', () => {
  fullImageContainer.style.display = 'none';
});

const boxesContainer = document.getElementById('boxes');
const renderBtn = document.getElementById('renderBtn');
const destroyBtn = document.getElementById('destroyBtn');
const amountInput = document.getElementById('amountInput');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

renderBtn.addEventListener('click', () => {
  const amount = parseInt(amountInput.value);
  if (amount > 0) {
    destroyBoxes(); 
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
