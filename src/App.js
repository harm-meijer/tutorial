import { ApolloCache } from "@apollo/client";
import "./App.css";
import Home from "./Pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
  //We need to define how to cache the data. for example in memory cache
  cache: new InMemoryCache(),
  //Also need to pass the URI for the api.
  //Information on where tha data will be fetched from.

  uri: "https://api.spacex.land/graphql",
  //uri: "https://countries.trevorblades.com/",
});
function App() {
  return (
    //When using apollo client: wrap all the components with a provider that will use apollo to access
    //GrapQL Data, so they can access the API.

    //set the provider passing a client, configured on the apolloClient const, up
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
