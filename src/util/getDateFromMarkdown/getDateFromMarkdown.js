/**
 * @function getDateFromMarkdown
 * @description Gets the first date stored in a markdown file.
 * @param {String} markdown The markdown to search for a date
 * @returns {String} The first date that was found in the markdown passed in.
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 */
export function getDateFromMarkdown(markdown) {
  const dateMatch = /\d+\/\d+\/\d+/;
  const date = markdown.match(dateMatch)[0];
  return date;
}
