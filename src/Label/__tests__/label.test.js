import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Label from '../Label'

test('renders Button correctly', () => {
  const label = <Label htmlFor='email'>Email</Label>

  expect(toJson(enzyme.mount(label))).toMatchSnapshot('enzyme.mount')
})
