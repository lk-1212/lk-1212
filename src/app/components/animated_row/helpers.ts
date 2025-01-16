export const getAnimatedStyles = (inverseStyle: boolean, index: number) => {
  if (isIndexAnOddNumber(index) && !inverseStyle)
    return "animate-slide-in-right mb-0 lg:flex-row-reverse lg:pt-5 xl:pt-[130px]";

  if (inverseStyle) return "lg:py-4";

  return "animate-slide-in-left mb-0 lg:py-6 xl:py-0";
};

export const getStyles = (
  inView: boolean,
  inverseStyle: boolean,
  index: number,
): string => {
  if (inView) return getAnimatedStyles(inverseStyle, index);
  return "opacity-0";
};

export const isIndexAnOddNumber = (index: number): boolean => {
  if (index % 2 !== 0) return true;

  return false;
};
