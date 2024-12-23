// write a test for the App component that renders without crashing
import { test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App.tsx";

test("renders without crashing", () => {
  render(<App />);
});
