import React from "react";

import AboutMe from "@/src/app/components/about_me";
import Contacts from "@/src/app/components/contacts";
import TextRow from "@/src/app/components/content_row";

const Home = (): React.ReactElement => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-screen">
      <AboutMe />
      <Contacts />
      <div>
        <TextRow />
      </div>
    </div>
  );
};

export default Home;
