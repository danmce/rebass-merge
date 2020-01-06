import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Image from '../Image'

test('renders Image correctly', () => {
  const image = (
    <Image
      src='https://fillmurray.com/200/300'
      sx={{
        width: ['100%', '50%'],
        borderRadius: 8
      }}
    />
  )

  expect(toJson(enzyme.mount(image))).toMatchSnapshot('enzyme.mount')
})
