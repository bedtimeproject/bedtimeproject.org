import { longslideleft } from "./longslideleft";

test("longslideleft returns string", () => {
  const output = longslideleft();
  expect(typeof output).toEqual("string");
});

test('longslideleft output contains "KeyFrames', () => {
  const output = longslideleft();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
