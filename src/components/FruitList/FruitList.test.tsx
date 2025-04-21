import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FruitList from "./FruitList";

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

describe("FruitList()", () => {
  it("should render the list with list items", () => {
    render(<FruitList fruits={fruits} />);
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(fruits.length);
  });
});
