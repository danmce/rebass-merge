import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from '../Button'

test('renders Button correctly', () => {
  const button = <Button>Test</Button>

  expect(toJson(enzyme.mount(button))).toMatchSnapshot('enzyme.mount')
})
