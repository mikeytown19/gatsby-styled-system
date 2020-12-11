import React from 'react'
import { ThemeProvider} from 'styled-components'
import 'typeface-montserrat'
import { GlobalStyles } from './GlobalStyles'
import theme from './theme'

const CustomThemeProvider = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}

    </ThemeProvider>
  )
}

export default CustomThemeProvider
