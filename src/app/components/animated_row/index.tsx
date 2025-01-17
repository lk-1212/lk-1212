"use client";
import { useInView } from "react-intersection-observer";
import { AnimatedRowTypes } from "./types";
import clsx from "clsx";
import { getStyles } from "./helpers";

const AnimatedRow = ({
  title,
  text,
  href,
  linkText,
  inverseStyle = false,
  index,
}: AnimatedRowTypes) => {
  const { ref: rowRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const renderLink = () => {
    if (!href) return null;

    return (
      <div className="py-3 text-center">
        <a href={href} className="italic text-purple-700 hover:underline">
          {linkText}
        </a>
      </div>
    );
  };
  return (
    <div
      ref={rowRef}
      className={clsx(
        getStyles(inView, inverseStyle, index),
        "p-5 sm:py-10 lg:text-3xl",
      )}
    >
      <div>
        <p className="font-lora text-4xl text-left italic sm:text-center sm:text-5xl">
          {title}
        </p>
        {renderLink()}
        <div
          className="text-left py-4 sm:pl-0 sm:max-w-4xl sm:text-center"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default AnimatedRow;
