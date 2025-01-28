import { render, screen } from "@testing-library/react";
import InfoTextGrid from ".";
import CoffeeImage from "../../../../assets/images/coffees/tradicional-express.png";

describe("InfoTextGrid component", () => {
  it("renders correctly", () => {
    render(<InfoTextGrid title="information" image={CoffeeImage} />);

    expect(screen.getByText("information")).toBeInTheDocument();
  });
});
