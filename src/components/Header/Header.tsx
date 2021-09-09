import { FC } from 'react'

import { Button } from '@components/Button'
import { IconButton } from '@components/IconButton'
import { TextInput } from '@components/TextInput'
import { CartIcon, CatalogIcon } from '@icons'
import { Badge } from '@components/Badge'
import { TopNavigationMenu, TopNavigationMenuItem } from '@components/TopNavigationMenu'

import styles from './Header.module.css'

interface IHeaderProps {
  topNavigationMenuItems: TopNavigationMenuItem[]
}

export const Header: FC<IHeaderProps> = (props) => {
  const { topNavigationMenuItems } = props

  return (
    <div className={styles.header}>
      <div className={styles.row}>
        <TopNavigationMenu items={topNavigationMenuItems} />
      </div>
      <div className={styles.row}>
        <div className={styles.catalog}>
          <Button addonAfter={<CatalogIcon size="s" />}>Каталог</Button>
        </div>
        <div className={styles.search}>
          <TextInput placeholder="Искать" />
        </div>
        <Badge content="2">
          <IconButton icon={CartIcon} />
        </Badge>
      </div>
    </div>
  )
}
