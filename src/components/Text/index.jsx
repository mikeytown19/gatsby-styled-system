import styled from 'styled-components'
import { variant } from 'styled-system'
import {
  space,
  color,
  typography
} from "styled-system";
import theme from '../../styles/theme'

console.log(theme.variants)
export const Text = styled.div`
  ${typography}
  ${space}
  ${color}
  ${variant({
    variants: theme.variants
  })}
`