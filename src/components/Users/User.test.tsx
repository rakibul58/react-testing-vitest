import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Users from "./User";

it("should render correctly", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", { name: /name/i });       
  expect(element).toBeInTheDocument();
});
