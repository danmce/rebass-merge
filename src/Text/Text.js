import React from 'react'
import PropTypes from 'prop-types'
import { Text as RebassText } from 'rebass'

const Text = ({ children, ...props }) => (
  <RebassText {...props}>{children}</RebassText>
)

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fontWeight: PropTypes.oneOf(['bold', 'normal']),
  color: PropTypes.string
}

export default Text
