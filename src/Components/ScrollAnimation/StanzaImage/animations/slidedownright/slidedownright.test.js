import { slidedownright } from "./slidedownright";

test("slidedownright returns string", () => {
  const output = slidedownright();
  expect(typeof output).toEqual("string");
});

test('slidedownright output contains "KeyFrames', () => {
  const output = slidedownright();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
