/**
 * @function slideup
 * @description Returns a string for a keyframes slide up animation with the
 * appropriate timing based on the image's placement in the story.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.0.0
 * @param {number} index
 * @param {number} imageIndex
 * @param {number} stanzaDuration
 * @param {number} oneIndexPercent
 * @returns {string} A Keyframes animation that needs to be placed inside a
 * <style> tag
 */
export function slideup(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}slideup${imageIndex} {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateY(-50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateY(-125px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateY(-200px);
    }
    100% {
      opacity: 0;
      transform: translateY(-200px);
    }
  }`;
}
