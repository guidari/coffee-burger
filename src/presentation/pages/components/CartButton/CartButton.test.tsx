import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import CartButton from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";

describe("CartButton component", () => {
  it("clicks the button", async () => {
    const mockClick = jest.fn();
    const user = userEvent.setup();

    render(<CartButton onClick={mockClick} image={FakeImage} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByAltText("carrinho")).toBeInTheDocument();

    await user.click(screen.getByAltText("carrinho"));

    expect(mockClick).toHaveBeenCalled();
  });
});
