import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from ".";

describe("DefaultLayout component", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    );
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
