import React, { VFC } from 'react'
import { Meta } from '@storybook/react'

import { Badge } from './Badge'
import { CartIcon } from '@icons'

export default {
  title: 'UI/Badge',
  component: Badge,
} as Meta

export const Default: VFC = () => (
  <Badge content="6">
    <CartIcon />
  </Badge>
)
