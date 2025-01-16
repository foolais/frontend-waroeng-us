import { render, screen } from "@testing-library/react";
import Title from "@/components/title/title";
import "@testing-library/jest-dom";

describe("Title Components", () => {
  it("render title text Waroeng Us", () => {
    const components = render(<Title />);
    expect(components).toMatchSnapshot();

    expect(screen.getByTestId("title").textContent).toBe("Waroeng Us");
  });

  it("applies custom font size", () => {
    render(<Title />);
    const titleElement = screen.getByText("Waroeng Us");
    expect(titleElement).toHaveClass("text-2xl font-semibold text-primary");
  });

  it("renders logo image", () => {
    render(<Title />);
    const iconElement = screen.getByRole("img", { hidden: true });
    expect(iconElement).toBeInTheDocument();
  });
});
