// Imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Variables
const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const timerRef = document.querySelector('.timer');
let userSelectDates = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(date) {
    if (date[0] < new Date()) {
      Notify.warning('Please choose a date in the future');
      buttonStart.setAttribute('disabled', 'disabled');
    } else {
      buttonStart.removeAttribute('disabled', 'disabled');
      userSelectDates = date;
    }
  },
};

buttonStart.setAttribute('disabled', 'disabled');
flatpickr(input, options);

// Event listeners
buttonStart.addEventListener('click', startInterval);

// Functions
function onTimer() {
  let timeLeft = new Date(userSelectDates) - Date.now();
  renderMarkup(timeLeft);
  let timeLeftFor = convertMs(timeLeft);
  if (
    timeLeftFor.days === 0 &&
    timeLeftFor.hours === 0 &&
    timeLeftFor.minutes === 0 &&
    timeLeftFor.seconds === 0
  ) {
    stopInterval();
  }
}

function startInterval() {
  intervalId = setInterval(onTimer, 1000);
  buttonStart.setAttribute('disabled', 'disabled');
}

function stopInterval() {
  clearInterval(intervalId);
}

function renderMarkup(timeLeft) {
  let { days, hours, minutes, seconds } = convertMs(timeLeft);
  days = addLeadingZero(days);
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  const markupString = `<div class="field"><span class="value" data - days >${days}</span><span class="label">Days</span></div><div class="field"><span class="value" data-hours>${hours}</span><span class="label">Hours</span></div><div class="field"><span class="value" data-minutes>${minutes}</span><span class="label">Minutes</span></div><div class="field"><span class="value" data-seconds>${seconds}</span><span class="label">Seconds</span></div>`;
  timerRef.innerHTML = markupString;
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
