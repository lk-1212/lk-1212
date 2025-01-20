import React from "react";

import AboutMe from "@/src/components/about_me";
import Contacts from "@/src/components/contacts";
import TextRow from "@/src/components/content_row";
import { SCROLL_DOWN } from "./constants";

const Home = (): React.ReactElement => {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <div className="flex flex-col text-center items-center justify-center h-screen">
        <AboutMe />
        <Contacts />
        <div className="pt-5">
          <p className="pt-8 animate-bounce md:text-2xl">{SCROLL_DOWN}</p>
        </div>
      </div>
      <div>
        <TextRow />
      </div>
    </div>
  );
};

export default Home;
