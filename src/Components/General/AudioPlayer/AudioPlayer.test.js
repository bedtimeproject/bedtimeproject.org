import { render } from "@testing-library/react";
import AudioPlayer from "./AudioPlayer";

describe("renders AudioPlayer", () => {
  test("renders base component", () => {
    render(<AudioPlayer />);
  });
});
