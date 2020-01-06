import React from 'react'
import PropTypes from 'prop-types'
import { Card as RebassCard } from 'rebass'

const Card = ({ children }) => <RebassCard>{children}</RebassCard>

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Card
