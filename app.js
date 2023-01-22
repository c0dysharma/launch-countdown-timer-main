const hoursEl = document.getElementById("time-box-hours");
const minuteesEl = document.getElementById("time-box-minutees");
const secondsEl = document.getElementById("time-box-seconds");
const ampmEl = document.getElementById("time-box-am-pm");

const updateTime = () => {
  let time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  time = time.split(":");
  hoursEl.innerText = time[0];
  minuteesEl.innerText = time[1];
  secondsEl.innerText = time[2].split(" ")[0];
  ampmEl.innerText = time[2].split(" ")[1];
};

window.setInterval(() => updateTime(), 1000);
