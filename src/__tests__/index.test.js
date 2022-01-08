import { render, screen } from "@testing-library/react";
import App from "@/pages/index";

describe("App", () => {
  it("renders Start Game Button", () => {
    render(<App />);

    const startGameButton = screen.getByText(/start game/i);

    expect(startGameButton).toBeInTheDocument();
  });

  it("render snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});