import { extractNameFromGithubUrl } from "./extractNameFromGithubUrl";

describe("extractNameFromGithubUrl functions correctly", () => {
  test("pulls standard name", () => {
    const result = extractNameFromGithubUrl(
      "https://github.com/facebook/react"
    );
    expect(result).toBe("facebook");
  });
});
