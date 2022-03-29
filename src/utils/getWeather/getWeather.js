// @ts-check

import { isChineseNewYear } from "../isChineseNewYear/isChineseNewYear";

/**
 * Enum for weather types
 * @enum {string}
 * @readonly
 */
export const WEATHER = {
  snow: "snow",
  rain: "rain",
  fireworks: "fireworks",
  clear: "clear",
};

/**
 * @function getWeather
 * @description Returns a string of what the weather should be like on a given
 * day. It will be consistent so if a user checks in in the morning and evening
 * it will rain both times. It will also keep the snow across different parts of
 * the site, so it won't keep switching weather.
 * @param {Date} [date] An optional argument that will be used as the date. If
 * not passed, today will be used.
 * @author Alexander Burdiss
 * @since 11/19/21
 * Last Modified 3/29/22
 * @version 1.2.0
 * @returns {string} One of "snow", "rain", "fireworks", or "clear"
 */
export function getWeather(date) {
  // Get current Date
  const today = date ? date : new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  // Christmas in July
  if (currentMonth == 7 && currentDay == 25) {
    return WEATHER.snow;
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
    isChineseNewYear(today)
  ) {
    return WEATHER.fireworks;
  }

  // Snow intermittently from November 18 to February
  if (
    (currentMonth == 11 && currentDay > 18) ||
    currentMonth == 12 ||
    currentMonth == 1 ||
    currentMonth == 2
  ) {
    if (currentDay % 2 == 0 || currentDay % 3 == 0) {
      return WEATHER.snow;
    }
  }

  // Rain every third day in March, April, or May.
  if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
    if (currentDay % 3 == 0) {
      return WEATHER.rain;
    }
  }
  return WEATHER.clear;
}
