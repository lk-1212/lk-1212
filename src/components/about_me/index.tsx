import React from "react";
import { JOB_DESCRIPTION, NAME } from "./constants";

const AboutMe = (): React.ReactElement => {
  const renderName = (): React.ReactElement => {
    return (
      <div className="text-5xl sm:text-8xl">
        <h1>{NAME}</h1>
      </div>
    );
  };

  const renderaJobDescription = (): React.ReactElement => {
    return (
      <div
        className="text-xl mt-2 sm:mt-4 sm:text-4xl"
        dangerouslySetInnerHTML={{ __html: JOB_DESCRIPTION }}
      />
    );
  };
  return (
    <div className="flex flex-col items-center">
      {renderName()}
      {renderaJobDescription()}
    </div>
  );
};
export default AboutMe;
