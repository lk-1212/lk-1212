import { getStyles } from "src/components/animated_row/helpers";

it("should return the correct style when text row is not in view", () => {
  const inView = false;
  const inverseStyle = true;
  const index = 0;
  expect(getStyles(inView, inverseStyle, index)).toEqual("opacity-0");
});

it("should return the correct style when text row is in view", () => {
  const inView = true;
  const inverseStyle = true;
  const index = 0;
  expect(getStyles(inView, inverseStyle, index)).toEqual(
    "animate-slide-in-left",
  );
});
