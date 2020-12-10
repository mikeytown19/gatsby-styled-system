import React from 'react'
import ThemeProvider from '../../styles/ThemeProvider'

const Layout = ({children}) =>
  <ThemeProvider>
    {children}
  </ThemeProvider>

export default Layout
