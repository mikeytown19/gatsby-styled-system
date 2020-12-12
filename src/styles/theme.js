import cyanea from 'cyanea'
import {cyaneaColorVariants, cyaneaColors} from './utils'

const colors = cyanea('tomato')

export default {
  variants: {...cyaneaColorVariants(colors)},
  colors: {...cyaneaColors(colors), ...cyaneaColorVariants(colors)},
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    med: '0 0 24px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  fontSizes: [
    10, // 0
    12, // 1
    14, // 2
    16, // 3
    24, // 4
    32, // 5
    48, // 6
    64, // 7
    96, // 8
    128 // 9
  ] ,
  breakpoints: [{
    xs: '480px',
    sm: '540px',
    md: '768px',
    lg: '940px',
    xl: '1200px',
    xxl: '1600px'
  }],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
};

