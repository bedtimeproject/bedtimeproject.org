import { render } from "@testing-library/react";
import LicensesList from "./LicensesList";

import { mockLicenses } from "./mockLicenses";

test("renders LicensesList", () => {
  render(<LicensesList licenses={mockLicenses} />);
});
