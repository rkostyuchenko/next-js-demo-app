import { FC } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from '@infrastructure/graphql'

import '@shared/styles/global.css'
import '@shared/styles/palette.css'
import '@shared/styles/typography.css'

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default App
