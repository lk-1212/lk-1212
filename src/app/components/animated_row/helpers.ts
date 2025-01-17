export const getAnimatedStyles = (inverseStyle: boolean, index: number) => {
  if (isIndexAnOddNumber(index) && inverseStyle)
    return "animate-slide-in-right";

  return "animate-slide-in-left";
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
