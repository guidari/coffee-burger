import { render, screen } from "@testing-library/react";
import AlertMessage from ".";
import FakeImage from "../../assets/images/coffees/american-express.png";

describe("AlertMessage component", () => {
  it("renders correctly when visible", () => {
    render(
      <AlertMessage
        message="Visible message"
        severity="success"
        visibility={true}
      />
    );

    expect(screen.queryByText("Visible message")).toBeInTheDocument();
  });

  it("renders correctly when not visible", () => {
    const alertVisibility = false;
    render(
      <>
        {alertVisibility && (
          <AlertMessage
            message="Visible message"
            severity="success"
            visibility={false}
          />
        )}
      </>
    );
    expect(screen.queryByText("Visible message")).not.toBeInTheDocument();
  });
});
