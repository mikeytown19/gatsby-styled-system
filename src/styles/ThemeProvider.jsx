import React from 'react'
import { ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import 'typeface-montserrat'
import { GlobalStyles } from './GlobalStyles'
import {theme} from './theme'

const ThemeProvider = ({children}) => {

  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
