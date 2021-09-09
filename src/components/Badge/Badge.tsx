import { FC } from 'react'

import styles from './Badge.module.css'

interface IBadgeProps {
  content: string
}

export const Badge: FC<IBadgeProps> = (props) => {
  const { content, children } = props

  return (
    <div className={styles.badge}>
      {children}
      <span className={styles.dot}>{content}</span>
    </div>
  )
}
