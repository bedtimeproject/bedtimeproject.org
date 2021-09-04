import { getTitleFromMarkdown } from "./getTitleFromMarkdown";

test("utility is a function", () => {
  expect(typeof getTitleFromMarkdown).toEqual("function");
});
