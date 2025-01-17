"use client";
import { useInView } from "react-intersection-observer";
import { AnimatedRowTypes } from "./types";
import clsx from "clsx";
import { getStyles } from "./helpers";

const AnimatedRow = ({
  text,
  inverseStyle = false,
  index,
}: AnimatedRowTypes) => {
  const { ref: rowRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={rowRef}
      className={clsx(
        getStyles(inView, inverseStyle, index),
        "p-5 md:py-10 lg:text-5xl",
      )}
    >
      {text}
      {/* {inView} */}
    </div>
  );
};

export default AnimatedRow;
