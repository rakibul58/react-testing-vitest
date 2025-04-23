import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import user from "@testing-library/user-event";
import UserEvent from "./UserEvent";

describe("userEvent()", () => {
  it("Renders a counter with initial of value of O", () => {
    render(<UserEvent />);
    const heading = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should increase the count upon button click", async () => {
    user.setup();
    render(<UserEvent />);
    const increaseButton = screen.getByText("Increase");

    await user.click(increaseButton);

    const heading = screen.getByRole("heading", {
      level: 3,
    });

    expect(heading).toHaveTextContent("Counter: 1");
  });
});
