import UserPage from "@/app/(content)/admin/user/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("User Page", () => {
  it("render user page", () => {
    const components = render(<UserPage />);
    expect(components).toMatchSnapshot();
  });

  it("have heading User", () => {
    render(<UserPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("User");
  });
});
