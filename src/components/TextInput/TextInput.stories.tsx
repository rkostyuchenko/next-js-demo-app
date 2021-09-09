import React, { ChangeEventHandler, useState } from 'react'
import { Story, Meta } from '@storybook/react'

import { TextInput, ITextInputProps } from './TextInput'

export default {
  title: 'UI/TextInput',
  component: TextInput,
} as Meta

const Template: Story<ITextInputProps> = (args) => {
  const [value, setValue] = useState('')

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  return (
    <TextInput {...args} value={value} placeholder="Текстовое поле" onChange={handleInputChange} />
  )
}

export const Default = Template.bind({})
Default.args = {
  value: 'Текстовое поле',
}
