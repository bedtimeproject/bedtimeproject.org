import { slideleft } from "./slideleft";

test("slideleft returns string", () => {
  const output = slideleft();
  expect(typeof output).toEqual("string");
});

test('slideleft output contains "KeyFrames', () => {
  const output = slideleft();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
