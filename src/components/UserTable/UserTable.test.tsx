import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserTable from "./UserTable";
import { users } from "../../App";

describe("UserTable()", () => {
  it("should render the welcome message after 5ms", async () => {
    render(<UserTable users={users} />);
    const welcomeMessage = await screen.findByTestId(
      "welcome",
      {},
      {
        timeout: 2000,
      }
    );
    expect(welcomeMessage).toBeInTheDocument();
  });
});
