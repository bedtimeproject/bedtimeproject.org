import { slideup } from "./slideup";

test("slideup returns string", () => {
  const output = slideup();
  expect(typeof output).toEqual("string");
});

test('slideup output contains "KeyFrames', () => {
  const output = slideup();
  const outputContainsKeyframes = output.includes("@keyframes");
  expect(outputContainsKeyframes).toBeTruthy();
});
