import React from "react";
import { TEXT_ROWS } from "./constants";
import clsx from "clsx";

const TextRow = () => {
  const renderText = () => {
    const text = TEXT_ROWS.map((text, index) => {
      return (
        <div
          className={clsx("py-5 my-5", text.reverse && "flex-row-reverse")}
          key={index}
        >
          {text.text}
        </div>
      );
    });
    return text;
  };

  return <div className="">{renderText()}</div>;
};

export default TextRow;
