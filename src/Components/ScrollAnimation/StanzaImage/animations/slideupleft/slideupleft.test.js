import { slideupleft } from "./slideupleft";

test("slideupleft returns string", () => {
  const output = slideupleft();
  expect(typeof output).toEqual("string");
});

test('slideupleft output contains "KeyFrames', () => {
  const output = slideupleft();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
