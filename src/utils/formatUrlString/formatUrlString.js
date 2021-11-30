// @ts-check
/**
 * @function formatUrlString
 * @description Formats a string to be used as an argument in React Router, so
 * that Drupal titles don't break the router.
 * @param {string} input The title of the content type, to be used as a part of
 * a url.
 * @returns {string} A formatted version of the title that will work better
 * with React Router.
 * @author Alexander Burdiss
 * @since 10/16/21
 * @version 1.2.2
 */
export function formatUrlString(input) {
  const tempInput = String(input)
    // @ts-ignore
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("  ", " ")
    .replaceAll(" ", "-")
    .toLowerCase();
  return tempInput;
}
