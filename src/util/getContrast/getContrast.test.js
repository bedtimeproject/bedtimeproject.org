import { getContrast } from "./getContrast";

describe("getContrast has correct output", () => {
  test("returns black for white background", () => {
    const input = "#ffffff";
    const output = getContrast(input);
    expect(output).toEqual("black");
  });

  test("returns white for black background", () => {
    const input = "#000000";
    const output = getContrast(input);
    expect(output).toEqual("white");
  });

  test("defaults to white if not a color", () => {
    const input = "Not a color";
    const output = getContrast(input);
    expect(output).toEqual("white");
  });
});
