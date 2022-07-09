function dayToHours(days) {
  return days * 24;
}
function hoursToMinutes(hours) {
  return hours * 60;
}
function minutesToSeconds(minutes) {
  return minutes * 60;
}

function secontsToMileseconds(seconts) {
  return seconts * 1000;
}

export const convertTimeToMileseconds = (time) => {
  const hours = dayToHours(time);
  const minutes = hoursToMinutes(hours);
  const seconds = minutesToSeconds(minutes);
  const mileseg = secontsToMileseconds(seconds);
  return mileseg;
};
