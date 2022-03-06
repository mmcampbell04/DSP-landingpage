export function getWeekDay() {
  const weekdayNum = new Date();
  const weekdayName = weekdayNum.toLocaleString("en-US", { weekday: "long" });
  const weekday = document.querySelector("[data-date=weekday]");
  weekday.textContent = `Happy ${weekdayName}!`;
}
