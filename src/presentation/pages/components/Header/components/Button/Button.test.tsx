import { render, screen } from "@testing-library/react";
import Button from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";

describe("Button component", () => {
  it("renders correctly", () => {
    render(<Button title="titulo" image={FakeImage} />);

    expect(screen.queryByAltText("titulo")).toBeInTheDocument();
  });
});
