import { render, screen } from "@testing-library/react";
import CartPreviewBox from ".";

describe("CartPreviewBox component", () => {
  it("renders correctly", () => {
    render(<CartPreviewBox />);

    // expect(screen.queryByAltText("titulo")).toBeInTheDocument();
  });
});
