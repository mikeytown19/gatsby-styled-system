// adds every color into your theme
export const cyaneaColors = (colors) => Object.entries(colors).reduce((all, item) => {
  all[item[0]] = item[1].hex
return all
}, {})

// Loops over every variant of a color provided by Cyanea. To use these colors you need to pass in the variant prop to your Component.
export const cyaneaColorVariants = (colors) => Object.entries(colors).reduce((all, item) => {
  item[1].variants.reduce((_, itm, index) => {
    return all[`${item[0]}${index}`] = itm.hex
  }, {})
  return all
}, {})
