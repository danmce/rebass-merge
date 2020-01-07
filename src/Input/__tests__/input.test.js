import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Input from '../Input'

test('renders Button correctly', () => {
  const input = (
    <Input
      uxpId='input1'
      label='email'
      labelFor='email'
      inputId='email'
      inputName='email'
      inputType='email'
      inputPlaceholder='jane@example.com'
    />
  )

  expect(toJson(enzyme.mount(input))).toMatchSnapshot('enzyme.mount')
})
