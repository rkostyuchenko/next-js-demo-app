import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export interface ITextInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string | number
  size?: 'm'
}

const defaultProps = {
  size: 'm',
} as const

import styles from './TextInput.module.css'

export const TextInput: FC<ITextInputProps> = (props) => {
  const { value, size, className, ...restTextInputProps } = props

  return (
    <span className={cn(styles.input, styles[size], className)}>
      <input className={styles.control} type="text" value={value} {...restTextInputProps} />
    </span>
  )
}

TextInput.defaultProps = defaultProps
