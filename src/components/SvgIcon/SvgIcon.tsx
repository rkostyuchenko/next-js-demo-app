import { FC } from 'react'

export interface ISvgIconProps {
  size?: 's' | 'm'
  title?: string
}

const sizeMap = {
  s: 24,
  m: 32,
}

export const SvgIcon: FC<ISvgIconProps> = (props) => {
  const { size, children, title } = props

  return (
    <svg
      viewBox="0 0 32 32"
      width={sizeMap[size]}
      height={sizeMap[size]}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

SvgIcon.defaultProps = {
  size: 'm',
}
