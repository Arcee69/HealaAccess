// import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
// // import { RestLink } from "apollo-link-rest";

// const httpLink = new HttpLink({
//   uri: "https://api-staging.heala.io/",
// });

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: ApolloLink.from([httpLink]),
// });

import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');

//   const baseUrl = import.meta.env.VITE_APP_BASE_URL
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_BASE_URL,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, httpLink]),
});
