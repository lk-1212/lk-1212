import { isIndexAnOddNumber } from "src/components/animated_row/helpers";

it("should return false when index is even", () => {
  const index = 0;
  expect(isIndexAnOddNumber(index)).toEqual(false);
});

it("should return true when index is odd", () => {
  const index = 1;
  expect(isIndexAnOddNumber(index)).toEqual(true);
});
