import React from "react";
import { TEXT_ROWS } from "./constants";
import clsx from "clsx";
import AnimatedRow from "../animated_row";

const ContentRow = () => {
  const renderText = () => {
    const text = TEXT_ROWS.map((item, index) => {
      return (
        <div className={clsx("py-5 my-5")} key={index}>
          <AnimatedRow
            text={item.text}
            inverseStyle={item.inverseStyle}
            index={index}
          />
        </div>
      );
    });
    return text;
  };

  return <div className="">{renderText()}</div>;
};

export default ContentRow;
