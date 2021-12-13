import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
const EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
    }
  }
`;

const List = React.memo(function List({ currency }) {
  const { loading, error, data } = useQuery(
    EXCHANGE_RATES,
    {
      variables: { currency },
      fetchPolicy: "no-cache",
    }
  );
  console.log("queried for", currency);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(
    "render for:",
    currency,
    loading,
    error,
    data
  );
  return (
    <div>
      <ul>
        {data.rates.map(({ currency }) => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>
    </div>
  );
});
const App = () => {
  const [currency, setCurrency] = useState("");
  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />
      {Boolean(currency.length) && (
        <List currency={currency} />
      )}
    </div>
  );
};

export default App;
