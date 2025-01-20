import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contacts from "src/components/contacts";
import { SOCIALS } from "src/components/contacts/constants";

it("renders social icons", () => {
  const linkedIn = "/_next/image?url=%2Fimages%2Flinkedin.png&w=128&q=75";
  const email = "/_next/image?url=%2Fimages%2Femail.png&w=128&q=75";
  const github = "/_next/image?url=%2Fimages%2Fgithub.png&w=128&q=75";

  render(<Contacts />);

  const contacts = screen.getAllByRole("img");

  expect(contacts).toHaveLength(3);
  expect(contacts[0]).toHaveAttribute("src", linkedIn);
  expect(contacts[1]).toHaveAttribute("src", email);
  expect(contacts[2]).toHaveAttribute("src", github);
});
