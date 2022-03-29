import { isChineseNewYear } from "./isChineseNewYear";

describe("isChineseNewYear functions correctly", () => {
  test("2023 actual date returns true", () => {
    const result = isChineseNewYear(new Date("January 22, 2023"));
    expect(result).toBeTruthy();
  });
  test("2023 seventh date of celebration returns true", () => {
    const result = isChineseNewYear(new Date("January 28, 2023"));
    expect(result).toBeTruthy();
  });
  test("2023 eighth day of celebration returns false", () => {
    const result = isChineseNewYear(new Date("January 29, 2023"));
    expect(result).toBeFalsy();
  });
  test("2023 Day before celebration returns false", () => {
    const result = isChineseNewYear(new Date("January 21, 2023"));
    expect(result).toBeFalsy();
  });
  test("Random day in 2023 Returns false", () => {
    const result = isChineseNewYear(new Date("June 22, 2023"));
    expect(result).toBeFalsy();
  });
  test("Date in 2024 Returns true", () => {
    const result = isChineseNewYear(new Date("February 10, 2024"));
    expect(result).toBeTruthy();
  });
});
