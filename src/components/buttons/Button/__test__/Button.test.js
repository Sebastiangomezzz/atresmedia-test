import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

it("tiene un componente button en su interior", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});
it("es de color verde en default", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveStyle("background-color: green");
});
it("renderiza texto", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveTextContent("");
});
it("tiene un evento onclick", () => {
  render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("onClick");
});
