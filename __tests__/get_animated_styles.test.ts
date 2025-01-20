import { getAnimatedStyles } from "src/components/animated_row/helpers";

it("should return the correct style when inverseStyle is true and index is odd", () => {
  const inverseStyle = true;
  const index = 1;
  expect(getAnimatedStyles(inverseStyle, index)).toEqual(
    "animate-slide-in-right",
  );
});

it("should return the correct style when inverseStyle is true and index is even", () => {
  const inverseStyle = true;
  const index = 0;
  expect(getAnimatedStyles(inverseStyle, index)).toEqual(
    "animate-slide-in-left",
  );
});

it("should return the correct style when inverseStyle is false and index is even", () => {
  const inverseStyle = false;
  const index = 0;
  expect(getAnimatedStyles(inverseStyle, index)).toEqual(
    "animate-slide-in-left",
  );
});
