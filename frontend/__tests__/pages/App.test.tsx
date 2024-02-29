import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    const signUp = screen.getByText("M'inscrire");
    const login = screen.getByText("Me Connecter");
    expect(signUp).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });
});
