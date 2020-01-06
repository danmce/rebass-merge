import React from 'react'
import PropTypes from 'prop-types'
import { Heading as RebassHeading } from 'rebass'

const Heading = ({ children, ...props }) => (
  <RebassHeading {...props}>{children}</RebassHeading>
)

Heading.propTypes = {
  children: PropTypes.string,
  fontWeight: PropTypes.oneOf(['bold', 'normal']),
  color: PropTypes.string
}

export default Heading
