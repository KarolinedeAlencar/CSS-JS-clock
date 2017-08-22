const hourHand = document.querySelector('[data-js="hour"]');
const minsHand = document.querySelector('[data-js="minutes"]');
const secondHand = document.querySelector('[data-js="seconds"]');


function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  console.log(seconds)
  const secondsDegrees = ((seconds / 60) * 360 + 121);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 122;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/ 60) * 30) + 124 ;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000)
