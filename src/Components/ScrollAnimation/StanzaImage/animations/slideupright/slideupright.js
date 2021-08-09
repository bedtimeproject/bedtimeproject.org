/**
 * @function slideupright
 * @description Returns a string for a keyframes slide up right animation with
 * the appropriate timing based on the image's placement in the story.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.1.0
 * @param {number} index
 * @param {number} imageIndex
 * @param {number} stanzaDuration
 * @param {number} oneIndexPercent
 * @param {string} animationOverlap
 * @returns {string} A Keyframes animation that needs to be placed inside a
 * <style> tag
 */
export function slideupright(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent,
  animationOverlap
) {
  const indexModifiers = animationOverlap === "true" ? [0.5, 1] : [0.25, 0.5];

  return `@keyframes stanza${index}slideupright${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    ${
      index > 0
        ? `${(index - indexModifiers[0]) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0) translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(50px) translateY(-50px);
    }
    ${(index + indexModifiers[0] * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(125px) translateY(-125px);
    }
    ${(index + indexModifiers[1] * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(200px) translateY(-200px);
    }
    100% {
      opacity: 0;
      transform: translateX(200px) translateY(-200px);
    }
  }`;
}
