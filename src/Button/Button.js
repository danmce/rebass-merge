import React from 'react'
import PropTypes from 'prop-types'
import { Button as RebassButton } from 'rebass'

const Button = ({ children, stretch, ...props }) => (
  <RebassButton width={stretch ? '100%' : 'auto'} {...props}>
    {children}
  </RebassButton>
)

export default Button

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  stretch: PropTypes.bool
}

Button.defaultProps = {
  variant: 'primary'
}
