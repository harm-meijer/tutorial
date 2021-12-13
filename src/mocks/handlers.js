import { graphql } from "msw";
const later = (value, time = 10) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(value), time)
  );
const makeResponse = (currency) => ({
  rates: [
    {
      currency,
      rate: "1",
      name: currency,
      __typename: "ExchangeRate",
    },
    {
      currency: `${currency}-other`,
      rate: "1",
      name: currency,
      __typename: "ExchangeRate",
    },
  ],
});
export const handlers = [
  //@todo: create a handler that returns data but if currency
  //  variable is of odd length then return 2 seconds later
];
