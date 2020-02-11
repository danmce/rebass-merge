import React from 'react'
import PropTypes from 'prop-types'
import { Image as RebassImage } from 'rebass'

const Image = ({ src, ...props }) => <RebassImage src={src} {...props} />

Image.propTypes = {
  src: PropTypes.string,
  variant: PropTypes.oneOf(['avatar'])
}

export default Image
