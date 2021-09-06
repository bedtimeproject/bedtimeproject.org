import { slideright } from "./slideright";

test("slideright returns string", () => {
  const output = slideright();
  expect(typeof output).toEqual("string");
});

test('slideright output contains "KeyFrames', () => {
  const output = slideright();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
