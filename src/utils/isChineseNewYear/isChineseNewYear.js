import { CalendarChinese } from "date-chinese";

/**
 * @function isChineseNewYear
 * @description Returns true if the date passed in is in the chinese new year.
 * @author Alexander Burdiss
 * @since 12/29/21
 * @version 1.0.0
 * @param {Date} date
 * @returns {boolean}
 */
export function isChineseNewYear(date) {
  // Get Chinese Calendar Date
  const cal = new CalendarChinese();
  let newYear = cal.newYear(date.getFullYear());
  cal.fromJDE(newYear);
  // convert to Date
  const chineseNewYear = cal.toDate();

  // Return true for the 7 days of celebration (official holiday)
  for (let i = 0; i < 7; i++) {
    let tempDate = new Date(chineseNewYear);
    // increment the date and compare today with this.
    tempDate.setDate(tempDate.getDate() + i);
    if (
      tempDate.getMonth() == date.getMonth() &&
      tempDate.getDate() == date.getDate()
    ) {
      return true;
    }
  }

  return false;
}
