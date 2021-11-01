import { fade } from "./fade";

test("fade returns string", () => {
  const output = fade();
  expect(typeof output).toEqual("string");
});

test('fade output contains "KeyFrames', () => {
  const output = fade();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
