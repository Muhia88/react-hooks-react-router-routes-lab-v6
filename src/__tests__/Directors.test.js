/* global jest */
if (!global.fetch) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            name: "Scott Derrickson",
            movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
          },
          {
            name: "Mike Mitchell",
            movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
          },
          {
            name: "Edward Zwick",
            movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
          },
        ]),
    })
  );
}

import "@testing-library/jest-dom";
import React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const router = createMemoryRouter(routes, {
  initialEntries: ["/directors"],
  initialIndex: 0,
});

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");
  render(<RouterProvider router={router} />);
  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of a <h1 />", () => {
  render(<RouterProvider router={router} />);
  const h1 = screen.getByText(/Directors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});