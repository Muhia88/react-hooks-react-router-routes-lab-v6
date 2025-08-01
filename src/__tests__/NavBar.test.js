// ...existing code...

import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

beforeEach(() => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
});

test('wraps content in a div with "navbar" class', () => {
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  const link = screen.getByText(/Home/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/");
  fireEvent.click(link);
  expect(link).toHaveClass("active");
});

test("renders an Actors <NavLink>", () => {
  const link = screen.getByText(/Actors/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/actors");
  fireEvent.click(link);
  expect(link).toHaveClass("active");
});