import React from 'react'
import PropTypes from 'prop-types'
import { Label as RebassLabel } from '@rebass/forms'

const Label = ({ children, htmlFor }) => (
  <RebassLabel htmlFor={htmlFor}>{children}</RebassLabel>
)

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  htmlFor: PropTypes.string
}

export default Label
