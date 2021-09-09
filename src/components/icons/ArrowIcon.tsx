import { FC } from 'react'
import { SvgIcon, ISvgIconProps } from '../SvgIcon'

export const ArrowIcon: FC<ISvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M26 12L16 22L6 12" />
  </SvgIcon>
)
