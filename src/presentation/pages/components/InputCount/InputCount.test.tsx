import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputCount } from ".";

describe("InputCount component", () => {
  it("works correctly to add", async () => {
    const mockClickAdd = jest.fn();
    const user = userEvent.setup();

    render(<InputCount onAddOneProductUnity={mockClickAdd} />);

    await user.click(screen.getByTestId("addOneProductUnity"));
    expect(mockClickAdd).toHaveBeenCalled();
  });

  it("works correctly to remove", async () => {
    const mockClickRemove = jest.fn();
    const user = userEvent.setup();

    render(<InputCount onRemoveProductUnity={mockClickRemove} />);

    await user.click(screen.getByTestId("removeProductUnity"));
    expect(mockClickRemove).toHaveBeenCalled();
  });

  it("should be on the minus button", async () => {
    const user = userEvent.setup();

    render(<InputCount />);

    await user.tab();

    expect(screen.getByTestId("removeProductUnity")).toHaveFocus();
  });

  it("should be on the counter", async () => {
    const user = userEvent.setup();

    render(<InputCount />);

    await user.tab();
    await user.tab();

    expect(screen.getByTestId("counter")).toHaveFocus();
  });

  it("should be on the plus button", async () => {
    const user = userEvent.setup();

    render(<InputCount />);

    await user.tab();
    await user.tab();
    await user.tab();

    expect(screen.getByTestId("addOneProductUnity")).toHaveFocus();
  });
});
