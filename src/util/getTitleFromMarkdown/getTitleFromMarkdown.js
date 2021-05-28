/**
 * @function getTitleFromMarkdown
 * @description Gets the first H1 present in the markdown, and returns it
 * without the Hash (markdown formatting)
 * @param {String} markdown The markdown to search
 * @returns {String} The first h1 found in the markdown, without the hash at the
 * beginning
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 1.0.0
 */
export function getTitleFromMarkdown(markdown) {
  const titleMatch = /#.*/;
  let title = markdown.match(titleMatch)[0];
  title = title.slice(2);
  return title;
}
