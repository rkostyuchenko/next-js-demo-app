import { FC } from 'react'
import NextLink, { LinkProps } from 'next/link'

import styles from './Link.module.css'

// https://nextjs.org/docs/api-reference/next/link

export const Link: FC<LinkProps> = (props) => {
  const { children, ...restNextLinkProps } = props

  return (
    <NextLink {...restNextLinkProps}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  )
}
