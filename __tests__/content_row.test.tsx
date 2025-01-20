import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TEXT_ROWS } from "src/components/content_row/constants";
import ContentRow from "src/components/content_row";

const mockDisconnect = jest.fn();
const mockObserve = jest.fn();
const mockUnobserve = jest.fn();

beforeEach(() => {
  window.IntersectionObserver = jest.fn().mockImplementation((cb) => ({
    cb,
    observe: mockObserve,
    unobserve: mockUnobserve,
    disconnect: mockDisconnect,
  }));
});

afterEach(() => {
  jest.clearAllMocks();
});

it("should render content", async () => {
  render(<ContentRow />);

  const aboutMeTitle = screen.getByText(TEXT_ROWS[0].title);
  const YIBTitle = screen.getByText(TEXT_ROWS[1].title);

  expect(aboutMeTitle).toBeInTheDocument();
  expect(YIBTitle).toBeInTheDocument();
});
