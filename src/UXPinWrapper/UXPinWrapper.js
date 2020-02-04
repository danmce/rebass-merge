// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'

export default function UXPinWrapper ({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
