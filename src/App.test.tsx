import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("should render hello world correctly", () => {
  render(<App />);
  const element = screen.getByText("Hello world");
  expect(element).toBeInTheDocument();
});
