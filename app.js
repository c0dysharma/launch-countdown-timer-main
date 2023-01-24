const hoursEl = document.getElementById("time-box-hours");
const minuteesEl = document.getElementById("time-box-minutees");
const secondsEl = document.getElementById("time-box-seconds");
const ampmEl = document.getElementById("time-box-am-pm");
const timePeriod = document.getElementById("time-period");
const name = document.getElementById("name");

name.innerText = localStorage.getItem("name")
  ? localStorage.getItem("name")
  : "call setName(<name>)";

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

  if (ampmEl.innerText.toLowerCase() === "pm") {
    if (hoursEl.innerText === "12") timePeriod.innerText = "Noon";
    else if (
      parseInt(hoursEl.innerText) >= 1 &&
      parseInt(hoursEl.innerText) < 4
    )
      timePeriod.innerText = "Afternoon";
    else if (
      parseInt(hoursEl.innerText) >= 4 &&
      parseInt(hoursEl.innerText) < 8
    )
      timePeriod.innerText = "Evening";
    else timePeriod.innerText = "Night";
    return;
  } else timePeriod.innerText = "Morning";
};

const SETNAME = (name) => {
  localStorage.setItem("name", name);
  window.location.reload();
};

updateTime();
window.setInterval(() => updateTime(), 1000);
