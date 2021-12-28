import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let futureDate = 0;
const refs = {
    dateInput: document.querySelector('#datetime-picker'),
    timerStartBtnEl: document.querySelector('[data-start]'),
    timerDaysEl: document.querySelector('[data-days]'),
    timerHoursEl: document.querySelector('[data-hours]'),
    timerMinutesEl: document.querySelector('[data-minutes]'),
    timerSecondsEl: document.querySelector('[data-seconds]'),
    timerWrapperEl: document.querySelector('.timer'),
};
refs.timerStartBtnEl.classList.add('no-activeBtn');
  


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const realTime = new Date();
      if (selectedDates[0] <= realTime) {
        Notiflix.Notify.failure('Please choose a date in the future');
        
      } else {      
        Notiflix.Notify.info('Good choice, press start to get started.');
        refs.timerStartBtnEl.classList.remove('no-activeBtn');
        futureDate = selectedDates[0];
      }

      
    },
  };


refs.dateInput.value = "Select Date..."
function onInputClick () {
    flatpickr("#datetime-picker", options); 
};


const timer = {
  start(startTime) {
    setInterval(() => {
        const currentTime = Date.now();
        const differenceInTime = startTime - currentTime
        const { days, hours, minutes, seconds } = convertMs(differenceInTime)
        refs.timerDaysEl.textContent = `${days}`;
        refs.timerHoursEl.textContent = `${hours}`;
        refs.timerMinutesEl.textContent = `${minutes}`;
        refs.timerSecondsEl.textContent = `${seconds}`;

    }, 1000);
  },  
};

function onStartBtnClick () {
  refs.timerStartBtnEl.classList.add('no-activeBtn');
  refs.timerWrapperEl.classList.add('active');
  timer.start(futureDate);
};
function addLeadingZero(value) {
  return String(value).padStart(2, '0');  
};
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

refs.timerStartBtnEl.addEventListener('click', onStartBtnClick)
refs.dateInput.addEventListener('click', onInputClick);
