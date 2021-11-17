import { getDecedents } from "./store";

const testState = {
  1: {
    id: 1,
    value: "1 - parent: root",
    children: [2],
  },
  2: {
    id: 2,
    value: "2 - parent: 1",
    children: [3],
  },
  3: {
    id: 3,
    value: "3 - parent: 2",
    children: [4],
  },
  4: {
    id: 4,
    value: "4 - parent: 3",
    children: [5],
  },
  5: {
    id: 5,
    value: "5 - parent: 4",
    children: [6, 7, 8],
  },
  6: {
    id: 6,
    value: "6 - parent: 5",
    children: [],
  },
  7: {
    id: 7,
    value: "7 - parent: 5",
    children: [],
  },
  8: {
    id: 8,
    value: "8 - parent: 5",
    children: [9],
  },
  9: {
    id: 9,
    value: "9 - parent: 8",
    children: [],
  },
  root: { id: "root", value: "root", children: [1] },
};
it("removes all decedents", () => {
  console.log("returns:", getDecedents(2, testState));
  // return;
  expect(getDecedents(2, testState).sort()).toEqual([3, 4, 5, 6, 7, 8, 9]);
  expect(getDecedents(8, testState).sort()).toEqual([9]);
  expect(getDecedents(5, testState).sort()).toEqual([6, 7, 8, 9]);
  expect(getDecedents(9, testState).sort()).toEqual([]);
});
const getTotal = (numbers) =>
  numbers.reduce(
    (acc, number) => acc + number,
    0 //start value for acc
  );
getTotal([1, 2, 3, 4]);
// acc=0, number=1 => 0+1
// acc=1, number=2 => 1+2
// acc=3, number=3 => 3+3
// acc=6, number 4 => 6+4 ...
//  10
