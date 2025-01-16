import { render, screen } from "@testing-library/react";
import NavItem from "@/components/nav/nav-item";
import { adminNavItem } from "@/lib/constant";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("NavItem Component", () => {
  it("renders the sidebar with links", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/admin/dashboard",
    });

    render(<NavItem />);

    expect(screen.getAllByRole("link")).toHaveLength(adminNavItem.length);

    adminNavItem.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    adminNavItem.forEach(({ name, routes }) => {
      const link = screen.getByRole("link", {
        name,
      });
      expect(link).toHaveAttribute("href", routes);
    });

    adminNavItem.forEach(({ name, icon: Icon }) => {
      if (Icon !== undefined) {
        expect(screen.getByTestId(`nav-icon-${name}`)).toBeInTheDocument();
      }
    });
  });

  it("applies the correct styles for active links", () => {
    (usePathname as jest.Mock).mockReturnValue("/admin/dashboard");

    render(<NavItem />);

    const dashboardLink = screen.getByRole("link", { name: "Dashboard" });

    expect(dashboardLink).toHaveClass("bg-background");
  });
});
