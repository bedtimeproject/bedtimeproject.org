// @ts-check
import { CalendarChinese } from "date-chinese";

/**
 * @function getWeather
 * @description Returns a string of what the weather should be like on a given
 * day. It will be consistent so if a user checks in in the morning and evening
 * it will rain both times. It will also keep the snow across different parts of
 * the site, so it won't keep switching weather.
 * @author Alexander Burdiss
 * @since 11/19/21
 * @version 1.1.1
 * @returns {string} One of "snow", "rain", "fireworks", or "clear"
 */
export function getWeather() {
  // Get current Date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  // Get Chinese Calendar Date
  const cal = new CalendarChinese();
  let newYear = cal.newYear(today.getFullYear());
  cal.fromJDE(newYear);
  // convert to Date
  const chineseNewYear = cal.toDate();

  // Christmas in July
  if (currentMonth == 7 && currentDay == 25) {
    return "snow";
  }

  // Fireworks on Holidays
  if (
    // New Years Eve
    (currentMonth == 12 && currentDay == 31) ||
    // New Years Day
    (currentMonth == 1 && currentDay == 1) ||
    // July 4th
    (currentMonth == 7 && currentDay == 4) ||
    // Chinese New Year
    (currentMonth == chineseNewYear.getMonth() + 1 &&
      currentDay == chineseNewYear.getDate())
  ) {
    return "fireworks";
  }

  // Snow intermittently from November 18 to February
  if (
    (currentMonth == 11 && currentDay > 18) ||
    currentMonth == 12 ||
    currentMonth == 1 ||
    currentMonth == 2
  ) {
    if (currentDay % 2 == 0 || currentDay % 3 == 0) {
      return "snow";
    }
  }

  // Rain every third day in March, April, or May.
  if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
    if (currentDay % 3 == 0) {
      return "rain";
    }
  }
  return "clear";
}
