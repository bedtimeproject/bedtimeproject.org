import { getDateFromMarkdown } from "./getDateFromMarkdown";

test("utility is a function", () => {
  expect(typeof getDateFromMarkdown).toEqual("function");
});
