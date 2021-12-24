
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop'),
    body: document.querySelector('body')
};
let intervalId;
refs.startBtn.style.width = "200px";
refs.startBtn.style.height = "100px";
refs.startBtn.style.position = "absolute";
refs.startBtn.style.left = "50%";
refs.startBtn.style.top = "50%";
refs.startBtn.style.transform = "translateX(-100%)";

refs.stopBtn.style.width = "200px";
refs.stopBtn.style.height = "100px";
refs.stopBtn.style.position = "absolute";
refs.stopBtn.style.left = "50%";
refs.stopBtn.style.top = "50%";
refs.stopBtn.style.transform = "translateX(100%)";




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function getBodyrandomColor () {
    const randomColor = getRandomHexColor();
    refs.body.style.backgroundColor = `${randomColor}`;
  };

function onStartBtnClick () {
    refs.startBtn.style.opacity = "0.4";
    refs.startBtn.style.pointerEvents = "none";
    intervalId = setInterval(getBodyrandomColor, 1000);
};
function onStoptBtnClick () {
    clearInterval(intervalId);
    refs.startBtn.style.opacity = "1";
    refs.startBtn.style.pointerEvents = "all";
};


  refs.startBtn.addEventListener('click', onStartBtnClick);
  refs.stopBtn.addEventListener('click', onStoptBtnClick);
