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
it("removes all decendents", () => {
  expect(getDecedents(2, testState)).toEqual([
    3, 4, 5, 6, 7, 8, 9,
  ]);
  expect(getDecedents(8, testState)).toEqual([9]);
  expect(getDecedents(5, testState)).toEqual([6, 7, 8, 9]);
  expect(getDecedents(9, testState)).toEqual([]);

  // act(() => {
  //   render(<Hello />, container);
  // });
  // expect(container.textContent).toBe("Hey, stranger");
  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");
  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});
