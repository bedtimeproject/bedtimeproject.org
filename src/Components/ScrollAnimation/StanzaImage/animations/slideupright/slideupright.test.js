import { slideupright } from "./slideupright";

test("slideupright returns string", () => {
  const output = slideupright();
  expect(typeof output).toEqual("string");
});

test('slideupright output contains "KeyFrames', () => {
  const output = slideupright();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
