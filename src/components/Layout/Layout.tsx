import { FC } from 'react'

import { Header } from '@components/Header'

import { TOP_NAVIGATION_MENU_ITEMS } from '@constants/top-navigation-menu-items'

export const Layout: FC = (props) => {
  const { children } = props

  return (
    <div>
      <Header topNavigationMenuItems={TOP_NAVIGATION_MENU_ITEMS} />
      {children}
    </div>
  )
}
