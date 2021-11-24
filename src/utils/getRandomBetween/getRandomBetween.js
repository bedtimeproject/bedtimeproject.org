// @ts-check
/**
 * @function getRandomBetween
 * @description Gets a random number between the inputted min and max.
 * @author Alexander Burdiss
 * @since 6/23/21
 * @version 1.0.0
 * @param {Number} min The smallest random number to return
 * @param {Number} max The largest random number to return
 * @returns {Number} A number between the min and max.
 */
export function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
