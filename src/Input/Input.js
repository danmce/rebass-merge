import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import { Input as RebassInput, Label as RebassLabel } from '@rebass/forms'

const Input = ({
  label,
  inputId,
  inputName,
  inputType,
  inputPlaceholder,
  labelFor
}) => (
  <Box>
    <RebassLabel htmlFor={labelFor}>{label}</RebassLabel>
    <RebassInput
      id={inputId}
      name={inputName}
      type={inputType}
      placeholder={inputPlaceholder}
    />
  </Box>
)

Input.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  labelFor: PropTypes.string
}

export default Input
