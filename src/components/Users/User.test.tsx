import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Users from "./User";

it("should render correctly", () => {
  render(<Users />);
  const element = screen.getByRole("textbox", { name: /name/i });
  const element2 = screen.getByPlaceholderText(/Enter your name/i);   
  const element3 = screen.getByText(/User Registration/i);    
  const element4 = screen.getByAltText(/photo of something/i);
  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
  expect(element3).toBeInTheDocument();
  expect(element4).toBeInTheDocument();
});
