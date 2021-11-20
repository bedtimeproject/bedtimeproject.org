// @ts-check
/**
 * @function getWeather
 * @description Returns a string of what the weather should be like on a given
 * day. It will be consistent so if a user checks in in the morning and evening
 * it will rain both times. It will also keep the snow across different parts of
 * the site, so it won't keep switching weather.
 * @author Alexander Burdiss
 * @since 11/19/21
 * @version 1.0.0
 * @returns {string} One of "snow", "rain", or "clear"
 */
export function getWeather() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  // Christmas in July
  if (currentMonth == 7 && currentDay == 25) {
    return "snow";
  }

  if (
    (currentMonth == 11 && currentDay > 18) ||
    currentMonth == 12 ||
    currentMonth == 1 ||
    currentMonth == 2
  ) {
    if (!(currentDay % 2 == 0) && !(currentDay % 3 == 0)) {
      return "snow";
    }
  }

  if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
    if (currentDay % 4 == 0) {
      return "rain";
    }
  }
  return "clear";
}
