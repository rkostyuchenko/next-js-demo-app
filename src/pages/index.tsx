import { GetServerSideProps, NextPage } from 'next'

import { client } from '@infrastructure/graphql'
import { Category } from '@domain/category'
import { GET_CATEGORIES } from '@infrastructure/categories'

import { Layout } from '@components/Layout'

interface IHomePageProps {
  categories: Category[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: GET_CATEGORIES })

  return {
    props: {
      categories: data.categories.items,
    },
  }
}

const HomePage: NextPage<IHomePageProps> = (props) => {
  const { categories } = props

  console.log(categories)

  return <Layout />
}

export default HomePage
