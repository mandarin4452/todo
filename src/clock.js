//import "./styles.css";

const clockTitle = document.querySelector(".js-clock");
const greeting = document.querySelector(".greetings");

function getTime() {
  const user_name = localStorage.getItem("user_name");
  let time = new Date().toLocaleDateString('en-US',{hour12 : false, hour : 'numeric', minute : 'numeric'}).toString();
  let temp = time.split(",")[1];
  let today = new Date();
  let hour = today.getHours();
  
  if (clockTitle.innerText.split(":").length === 1) {
    clockTitle.innerText = temp;
  }
  else {
    clockTitle.innerText = temp.split(":").join(' ');
  }
  
  if (hour < 12) {
    greeting.innerHTML = `Good morning, ${user_name}.`;
  }
  else if (hour < 15) {
    greeting.innerHTML = `Good afternoon, ${user_name}.`;
  }
  else {
    greeting.innerHTML = `Good evening, ${user_name}.`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

