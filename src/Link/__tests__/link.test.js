import React from 'react'
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import Link from '../Link'

test('renders Link correctly', () => {
  const link = <Link href='https://rebassjs.org'>Link</Link>

  expect(toJson(enzyme.mount(link))).toMatchSnapshot('enzyme.mount')
})
