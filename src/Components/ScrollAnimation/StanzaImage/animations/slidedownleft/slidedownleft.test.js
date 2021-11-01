import { slidedownleft } from "./slidedownleft";

test("slidedownleft returns string", () => {
  const output = slidedownleft();
  expect(typeof output).toEqual("string");
});

test('slidedownleft output contains "KeyFrames', () => {
  const output = slidedownleft();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
