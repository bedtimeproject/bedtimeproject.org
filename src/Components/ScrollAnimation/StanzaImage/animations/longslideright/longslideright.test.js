import { longslideright } from "./longslideright";

test("longslideright returns string", () => {
  const output = longslideright();
  expect(typeof output).toEqual("string");
});

test('longslideright output contains "KeyFrames', () => {
  const output = longslideright();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
