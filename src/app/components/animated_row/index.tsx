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
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div ref={rowRef} className={clsx(getStyles(inView, inverseStyle, index))}>
      {text}
      {/* {inView} */}
    </div>
  );
};

export default AnimatedRow;
