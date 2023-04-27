import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test('Does the "Select a category" text appear?', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select a category!/i);
  expect(linkElement).toBeInTheDocument();
});

test("Click on the dropdown and select JS. Do buttons appear?", async () => {
  render(<App />);
  let dropdown = await screen.findByText(/Select a category!/i);
  userEvent.click(dropdown);
  let js = await screen.findByText(/JS/i);
  userEvent.click(js);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
