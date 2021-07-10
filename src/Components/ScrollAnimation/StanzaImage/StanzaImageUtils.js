/**
 * @function fade
 * @description Returns a string for a keyframes fade animation with the
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
export function fade(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}fade${imageIndex} {
    0% {
      opacity: 0;
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }`;
}

/**
 * @function slidedown
 * @description Returns a string for a keyframes slide down animation with the
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
export function slidedown(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}slidedown${imageIndex} {
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
      transform: translateY(50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateY(150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 0;
      transform: translateY(200px);
    }
  }`;
}

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
      transform: translateY(-150px);
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

/**
 * @function slideleft
 * @description Returns a string for a keyframes slide left animation with the
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
export function slideleft(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}slideleft${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }`;
}

/**
 * @function slideright
 * @description Returns a string for a keyframes slide right animation with the
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
export function slideright(index, imageIndex, stanzaDuration, oneIndexPercent) {
  return `@keyframes stanza${index}slideright${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 0;
      transform: translateX(200px);
    }
  }`;
}

/**
 * @function slidedownleft
 * @description Returns a string for a keyframes slide down left animation with
 * the appropriate timing based on the image's placement in the story.
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
export function slidedownleft(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent
) {
  return `@keyframes stanza${index}slidedownleft${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0) translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-50px) translateY(50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-150px) translateY(150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(-200px) translateY(200px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px) translateY(200px);
    }
  }`;
}

/**
 * @function slidedownright
 * @description Returns a string for a keyframes slide down right animation with
 * the appropriate timing based on the image's placement in the story.
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
export function slidedownright(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent
) {
  return `@keyframes stanza${index}slidedownright${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0) translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(50px) translateY(50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(150px) translateY(150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(200px) translateY(200px);
    }
    100% {
      opacity: 0;
      transform: translateX(200px) translateY(200px);
    }
  }`;
}

/**
 * @function slideupleft
 * @description Returns a string for a keyframes slide up left animation with
 * the appropriate timing based on the image's placement in the story.
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
export function slideupleft(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent
) {
  return `@keyframes stanza${index}slideupleft${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0) translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-50px) translateY(-50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(-150px) translateY(-150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(-200px) translateY(-200px);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px) translateY(-200px);
    }
  }`;
}

/**
 * @function slideupright
 * @description Returns a string for a keyframes slide up right animation with
 * the appropriate timing based on the image's placement in the story.
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
export function slideupright(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent
) {
  return `@keyframes stanza${index}slideupright${imageIndex} {
    0% {
      opacity: 0;
      transform: translateX(0) translateY(0);
    }
    ${
      index > 0
        ? `${(index - 0.5) * oneIndexPercent}% {
        opacity: 0;
        transform: translateX(0) translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(50px) translateY(-50px);
    }
    ${(index + 0.5 * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateX(150px) translateY(-150px);
    }
    ${(index + 1 * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateX(200px) translateY(-200px);
    }
    100% {
      opacity: 0;
      transform: translateX(200px) translateY(-200px);
    }
  }`;
}
