/**
 * @function isIE
 * @description Returns true if the user is using Internet Explorer of any
 * version
 * @author Alexander Burdiss
 * @version 1.0.0
 * @returns {boolean}
 */
export function isIE() {
  let ua = window.navigator.userAgent;
  let isIE = /MSIE|Trident/.test(ua);
  return isIE;
}
