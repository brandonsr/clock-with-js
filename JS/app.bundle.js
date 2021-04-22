"use strict";

const getHour = () => {
  const date = new Date(); // console.log(date)

  const time = {
    hora: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds()
  }; // console.log(time)

  const now = `${time.hora} : ${time.minute} : ${time.seconds}`;
  let reloj = document.querySelector('#reloj');
  reloj.innerHTML = now;

  if (time.hora < 12) {
    let $good = document.querySelector('#good');
    $good.innerHTML = "Buenos dias 🌤";
  } else if (time.hora < 18) {
    let $good = document.querySelector('#good');
    $good.innerHTML = "Buenas tardes ☀";
  } else {
    let $good = document.querySelector('#good');
    $good.innerHTML = "Buenas noches 🌙";
  }
}; // getHour()


setInterval(getHour, 1);