export function getTitleFromMarkdown(markdown) {
  const titleMatch = /#.*/;
  let title = markdown.match(titleMatch)[0];
  title = title.slice(2);
  return title;
}
