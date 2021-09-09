import { FC } from 'react'

import { Link } from '@components/Link'

import styles from './TopNavigationMenu.module.css'

export type TopNavigationMenuItem = {
  title: string
  href: string
}

interface ITopNavigationMenuProps {
  items: TopNavigationMenuItem[]
}

export const TopNavigationMenu: FC<ITopNavigationMenuProps> = (props) => {
  const { items } = props

  return (
    <nav>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href} className={styles.item}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
