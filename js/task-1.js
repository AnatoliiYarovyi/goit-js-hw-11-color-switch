const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsLength = colors.length;

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerColor = null;

startBtn.addEventListener("click", () => { 
  startBtn.setAttribute('disabled', 'disabled');
  timerColor = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);
    bodyRef.style.backgroundColor = colors[randomColor];
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute('disabled');
  clearInterval(timerColor);
  console.log("setInterval stopped!");
});