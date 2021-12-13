import React from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_COUNTRY_QUERY,
  LIST_COUNTRIES,
  GET_SPACEX_LAUNCHES_SINCE,
} from "../graphql/Queries";

//To fetch data we use query hooks, like UseQuery and UseLazyQuery.
//UseQuery hook fetches data when the component is mounted.
//UseLazyQuery hook fetches data "on demand"
function Home(props) {
  //
  /**const [getCountryName, { loading, data, error }] = useLazyQuery(
    GET_COUNTRY_QUERY,
    {
      variables: { name: "Brazil" },
    }
  );
*/
  const [getCountries, { loading, data, error }] = useLazyQuery(
    GET_SPACEX_LAUNCHES_SINCE
  );

  if (error) return <h1>Error!</h1>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h1>List all the countries </h1>
      <button onClick={getCountries}>Get Countries!</button>c
    </div>
  );
}

export default Home;
