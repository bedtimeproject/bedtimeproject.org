export function getDateFromMarkdown(markdown) {
  const dateMatch = /\d+\/\d+\/\d+/;
  const date = markdown.match(dateMatch)[0];
  return date;
}
