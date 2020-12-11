import React from 'react'
import Layout from '../components/Layout'
import { Text } from '../components/Text'
import { Box } from '../components/Box'
import { Heading } from '../components/Heading'

const index = () => {
  return (
    <Layout>
      <Box bg="teal.hex" p={[3,4]}>
        <Heading color="blue.hex">This is the Heading!</Heading>
        <Heading color="primary" fontSize={0}>This is the Heading!</Heading>

        <Text color="blue" m={0} >
          Styled System w/ Gatsby!
        </Text>
      </Box>
    </Layout>
  )
}

export default index