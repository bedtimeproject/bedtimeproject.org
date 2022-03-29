import { getWeather, WEATHER } from "./getWeather";

describe("getWeather returns correct weather", () => {
  test("chinese New Year returns Fireworks", () => {
    const result = getWeather(new Date("January 22, 2023"));
    expect(result).toBe(WEATHER.fireworks);
  });
  test("Christmas in July snows", () => {
    const result = getWeather(new Date("July 25, 2023"));
    expect(result).toBe(WEATHER.snow);
  });
  test("new years eve has fireworks", () => {
    const result = getWeather(new Date("December 31, 2023"));
    expect(result).toBe(WEATHER.fireworks);
  });
  test("New Years day is fireworks", () => {
    const result = getWeather(new Date("January 1, 2023"));
    expect(result).toBe(WEATHER.fireworks);
  });
  test("July 4th has fireworks", () => {
    const result = getWeather(new Date("July 4, 2023"));
    expect(result).toBe(WEATHER.fireworks);
  });
  test("rain happens in march", () => {
    const result = getWeather(new Date("March 30, 2022"));
    expect(result).toBe(WEATHER.rain);
  });
  test("clear weather happens sometimes", () => {
    const result = getWeather(new Date("March 29, 2022"));
    expect(result).toEqual(WEATHER.clear);
  });
});
