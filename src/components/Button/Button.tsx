import { FC, MouseEventHandler, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

export interface IButtonProps {
  addonBefore?: ReactNode
  addonAfter?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  view?: 'primary' | 'ghost'
  size?: 'm'
}

const defaultProps = {
  view: 'primary',
  size: 'm',
} as const

export const Button: FC<IButtonProps> = (props) => {
  const { addonBefore, addonAfter, children, size, view, className, ...restButtonProps } = props

  return (
    <button
      className={cn(styles.button, styles[view], styles[size], className)}
      type="button"
      {...restButtonProps}
    >
      {addonBefore && <span className={styles.addon}>{addonBefore}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {addonAfter && <span className={styles.addon}>{addonAfter}</span>}
    </button>
  )
}

Button.defaultProps = defaultProps
