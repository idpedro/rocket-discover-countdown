import {
  convertMillisecondsToTime,
  DAYS_KEYS,
} from "./time/convertMillisecondsToTime.js";
import { convertTimeToMileseconds } from "./time/convertTimeToMileseconds.js";

let interval;
let Time = convertTimeToMileseconds(8);
const elements = document.querySelectorAll("[data-type]");

const updateTime = () => {
  const timeObject = convertMillisecondsToTime(Time);
  for (const element of elements) {
    const key = DAYS_KEYS[element.getAttribute("data-type")];
    element.innerHTML = timeObject[key];
  }
};
updateTime();

function startCount() {
  interval = setInterval(() => {
    Time -= 1000;
    updateTime();
  }, 1000);
}

function stopCount() {
  if (interval) clearInterval(interval);
  interval = undefined;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    (interval && stopCount()) || startCount();
  }
});

startCount();
