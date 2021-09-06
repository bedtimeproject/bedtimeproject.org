import { slidedown } from "./slidedown";

test("slidedown returns string", () => {
  const output = slidedown();
  expect(typeof output).toEqual("string");
});

test('slidedown output contains "KeyFrames', () => {
  const output = slidedown();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
