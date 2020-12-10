import React from 'react'

import { Text } from '../Text'

export const Heading = ({ children, ...props }) => <Text  {...props}>{children}</Text>;

Heading.defaultProps = {
  color: "white",
  fontSize: 7,
  fontWeight: "bold",
};