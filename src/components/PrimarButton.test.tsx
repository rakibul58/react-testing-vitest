import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render correctly", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to add");
    expect(element).toBeInTheDocument();
  });

  it("should render correctly with action prop", () => {
    render(<PrimaryButton action="Post" />);
    const element = screen.getByText("Click to Post");
    expect(element).toBeInTheDocument();
  });   
});
