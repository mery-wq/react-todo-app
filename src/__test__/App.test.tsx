import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";
// import "@testing-library/jest-dom";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  //   const app = screen.getByText("Hello App!");
  expect(true).toBeTruthy();
});
