import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("render Heloo World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldEl = screen.getByText("Hello World!");
    expect(helloWorldEl).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const text = screen.getByText("good to see you", {exact: false});
    expect(text).toBeInTheDocument();
  });

  test("render 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl)

    // Assert
    const changedText = screen.getByText("Changed!");
    expect(changedText).toBeInTheDocument();
  });

  test("do not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnEl = screen.getByRole('button');
    userEvent.click(btnEl)

    // Assert
    const text = screen.queryByText("good to see you", {exact: false});
    expect(text).toBeNull();
  });
});
