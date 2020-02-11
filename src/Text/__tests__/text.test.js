import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Text from '../Text'

test('renders Text correctly', () => {
  const text = (
    <Text fontSize={[3, 4, 5]} fontWeight='bold' color='primary'>
      Text
    </Text>
  )

  expect(toJson(enzyme.mount(text))).toMatchSnapshot('enzyme.mount')
})
