import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl65o9sym9fbb01uk306udnlm/master',
  cache: new InMemoryCache()
})