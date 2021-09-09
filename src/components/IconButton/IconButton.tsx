import { FC, ElementType } from 'react'

import { Button } from '@components/Button'

interface IIconButtonProps {
  icon: ElementType
  size?: 'm'
}

const defaultProps = {
  size: 'm',
} as const

export const IconButton: FC<IIconButtonProps> = (props) => {
  const { icon: Icon, size, ...restIconButtonProps } = props

  return <Button view="ghost" addonBefore={<Icon size={size} />} {...restIconButtonProps} />
}

IconButton.defaultProps = defaultProps
