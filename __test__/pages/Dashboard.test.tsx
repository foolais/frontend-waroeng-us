import DashboardPage from "@/app/(content)/admin/dashboard/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Dashboard Page", () => {
  it("render dashboard page", () => {
    const components = render(<DashboardPage />);
    expect(components).toMatchSnapshot();
  });

  it("have heading Dashboard", () => {
    render(<DashboardPage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Dashboard");
  });
});
