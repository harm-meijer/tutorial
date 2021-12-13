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
  graphql.query("GetExchangeRates", (req, res, ctx) => {
    const currency = req.body.variables.currency;
    const time = currency.length % 2 === 0 ? 10 : 1000;
    return later(makeResponse(currency), time).then(
      (data) => res(ctx.data(data))
    );
  }),
];
