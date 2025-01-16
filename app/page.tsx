import React from "react";

import AboutMe from "@/components/about_me";
import Contacts from "@/components/contacts";
import TextRow from "@/components/text_row";

const Home = (): React.ReactElement => {
  return (
    <div className="flex flex-col  text-center items-center justify-center h-screen">
      <AboutMe />
      <Contacts />
      <div>
        <TextRow />
      </div>
    </div>
  );
};

export default Home;
