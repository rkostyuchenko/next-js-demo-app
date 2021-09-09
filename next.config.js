
const { URL } = require('url')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      use: [
        {
          loader: 'graphql-tag/loader',
        },
      ],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: new URL('/graphql', process.env.MAGENTO_URL).href
      }
    ]
  }
}