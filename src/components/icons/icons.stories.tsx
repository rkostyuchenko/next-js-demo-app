import React, { VFC } from 'react'
import { Meta } from '@storybook/react'

import * as icons from '@icons'

export default {
  title: 'UI/Icons',
} as Meta

export const Default: VFC = () => (
  <>
    {Object.keys(icons).map((name) => {
      const Icon = icons[name]

      return <Icon key={Icon} title={`<${Icon.displayName} />`} />
    })}
  </>
)
