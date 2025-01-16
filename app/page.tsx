import AboutMe from "@/components/about_me";
import Contacts from "@/components/contacts";
import React from "react";

const Home = (): React.ReactElement => {
  return(
    <div className="flex flex-col items-center justify-center h-screen">
    <AboutMe />
    <Contacts />
  </div>
  )
}

export default Home