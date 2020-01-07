import React from 'react'
import PropTypes from 'prop-types'
import { Link as RebassLink } from 'rebass'

const Link = ({ children, ...props }) => (
  <RebassLink {...props}>{children}</RebassLink>
)

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['nav'])
}

export default Link
