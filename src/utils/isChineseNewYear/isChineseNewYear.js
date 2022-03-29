const chineseNewYearDates = [
  "January 22, 2023",
  "February 10, 2024",
  "January 29, 2025",
  "February 17, 2026",
  "February 6, 2027",
  "January 26, 2028",
  "February 13, 2029",
  "February 3, 2030",
  "January 23, 2031",
  "February 11, 2032",
  "January 31, 2033",
  "February 19, 2034",
  "February 8, 2035",
  "January 28, 2036",
  "February 15, 2037",
  "February 4, 2038",
  "January 24, 2039",
  "February 12, 2040",
  "February 1, 2041",
  "January 22, 2042",
  "February 10, 2043",
  "January 30, 2044",
  "February 17, 2045",
  "February 6, 2046",
  "January 26, 2047",
  "February 14, 2048",
  "February 2, 2049",
  "January 23, 2050",
];

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
  // Get chinese new year date this year
  const thisYearDate = chineseNewYearDates.find((newYear) => {
    return newYear.includes(date.getFullYear());
  });
  // convert to Date
  const chineseNewYear = new Date(thisYearDate);

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
