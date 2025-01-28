import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";
import userEvent from "@testing-library/user-event";

describe("Header component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("should be focus on the link to the main content", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const user = userEvent.setup();

    await user.tab();

    expect(screen.getByTestId("mainContent")).toHaveFocus();
  });

  it("should be focus on the logo", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const user = userEvent.setup();

    await user.tab();
    await user.tab();

    expect(screen.getByTestId("logoLink")).toHaveFocus();
  });

  it("should be focus on the cart", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const user = userEvent.setup();

    await user.tab();
    await user.tab();
    await user.tab();

    expect(screen.getByTestId("cart")).toHaveFocus();
  });
});
