import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, IButtonProps } from './Button'
import { ArrowIcon } from '@icons'

export default {
  title: 'UI/Button',
  component: Button,
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Кнопка',
  addonBefore: <ArrowIcon size="s" />,
}
