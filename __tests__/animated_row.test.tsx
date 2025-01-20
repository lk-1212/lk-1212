import React from "react";
import "@testing-library/jest-dom";
import AnimatedRow from "src/components/animated_row";
import { render, screen } from "@testing-library/react";

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

describe("About me conmponent", () => {
  it("renders row title", () => {
    render(<AnimatedRow title="title" text="text" index={1} />);

    const rowTitle = screen.getByText("title");

    expect(rowTitle).toBeInTheDocument();
  }),
    it("renders row text", () => {
      render(<AnimatedRow title="title" text="text" index={1} />);

      const rowText = screen.getByText("text");

      expect(rowText).toBeInTheDocument();
    }),
    it("renders row text", () => {
      render(
        <AnimatedRow
          title="title"
          text="text"
          index={1}
          href="https://google.com"
          linkText="click me"
        />,
      );

      const rowLinkText = screen.getByText("click me");

      expect(rowLinkText).toBeInTheDocument();
    });
});
