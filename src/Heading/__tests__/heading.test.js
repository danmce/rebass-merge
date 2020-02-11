import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Heading from '../Heading'

test('renders Heading correctly', () => {
  const heading = (
    <Heading fontSize={[5, 6, 7]} color='primary'>
      Hello
    </Heading>
  )

  expect(toJson(enzyme.mount(heading))).toMatchSnapshot('enzyme.mount')
})
