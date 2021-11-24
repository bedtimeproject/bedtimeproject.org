// @ts-check
/**
 * @function randomElement
 * @description Returns a random element from an array.
 * @param {*[]} items An array of items
 * @returns {*} One random item from the array
 * @author Alexander Burdiss
 * @since 10/25/21
 * @version 1.0.0
 */
export function randomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}
