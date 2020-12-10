import React from 'react'
import {Global, css} from '@emotion/core'
import {theme} from './theme'
export const GlobalStyles = () => {
  return (
  <Global styles={css`
    html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.body};
    }

      * {
          box-sizing: inherit;
          &::before,
          &::after {
            box-sizing: inherit;
          }

          &::-moz-focus-inner {
            border: 0;
          }
        }

        input,
        select,
        textarea,
        button {
          font-size: inherit;
          font-family: inherit;
        }

  `}/>)
}



