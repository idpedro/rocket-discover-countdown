const CONVERTION_TABLE = {
  MS_ON_ONE_DAY: 86400000,
  MS_ON_ONE_HOUR: 3600000,
  MS_ON_ONE_MINUTE: 60000,
  MS_ON_ONE_SECONDS: 1000,
};

export const DAYS_KEYS = {
  dias: "days",
  horas: "hours",
  minutos: "minutes",
  segundos: "seconds",
};

function millisecondsToDays(ms) {
  const days = Math.floor(ms / CONVERTION_TABLE.MS_ON_ONE_DAY);
  const hoursMs = Math.round(ms % CONVERTION_TABLE.MS_ON_ONE_DAY);
  return [days, hoursMs];
}
function millisecondsToHours(ms) {
  const hours = Math.floor(ms / CONVERTION_TABLE.MS_ON_ONE_HOUR);
  const minutesMs = Math.round(ms % CONVERTION_TABLE.MS_ON_ONE_HOUR);
  return [hours, minutesMs];
}
function millisecondsToMinutes(ms) {
  const minutes = Math.floor(ms / CONVERTION_TABLE.MS_ON_ONE_MINUTE);
  const secondsMs = Math.round(ms % CONVERTION_TABLE.MS_ON_ONE_MINUTE);
  return [minutes, secondsMs];
}
function millisecondsToSeconds(ms) {
  const seconds = Math.floor(ms / CONVERTION_TABLE.MS_ON_ONE_SECONDS);
  return [seconds];
}

export const convertMillisecondsToTime = (ms) => {
  const [days, hoursMs] = millisecondsToDays(ms);
  const [hours, minutesMs] = millisecondsToHours(hoursMs);
  const [minutes, secondsMs] = millisecondsToMinutes(minutesMs);
  const [seconds] = millisecondsToSeconds(secondsMs);
  return { days, hours, minutes, seconds };
};
