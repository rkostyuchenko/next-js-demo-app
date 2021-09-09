import { ApolloClient, InMemoryCache } from '@apollo/client'

if (!process.browser) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  global.URL = require('url').URL
}

const uri = process.browser
  ? new URL('/graphql', location.href).href
  : new URL('/graphql', process.env.MAGENTO_URL).href

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})
