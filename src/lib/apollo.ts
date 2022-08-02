import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6a5akd7e49h01t551r1camt/master',
  cache: new InMemoryCache(),
})
