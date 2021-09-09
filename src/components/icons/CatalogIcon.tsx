import { FC } from 'react'
import { SvgIcon, ISvgIconProps } from '../SvgIcon'

export const CatalogIcon: FC<ISvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M5 16H27" />
    <path d="M5 8H27" />
    <path d="M5 24H27" />
  </SvgIcon>
)
