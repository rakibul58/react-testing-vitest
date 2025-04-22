import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserTable from "./UserTable";
import { users } from "../../App";

describe("UserTable()", () => {
  it("should render the welcome message after 5ms", async () => {
    render(<UserTable users={users} />);
    //     const welcomeMessage = await screen.findByTestId(
    //       "welcome",
    //       {},
    //       {
    //         timeout: 2000,
    //       }
    //     );
    //     expect(welcomeMessage).toBeInTheDocument();
    //     screen.logTestingPlaygroundURL();
    //     const rows = screen.getAllByRole("row");
    //     expect(rows).toHaveLength(users.length + 1);

    const rows = within(screen.getByTestId("users")).getAllByRole("row");
    expect(rows).toHaveLength(users.length);
  });
});
