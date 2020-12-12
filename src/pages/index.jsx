import React from 'react'
import Layout from '../components/Layout'
import { Text } from '../components/Text'
import { Box } from '../components/Box'
import { Heading } from '../components/Heading'

const index = () => {
  return (
    <Layout>
      <Box bg="teal" p={[3,4]}>
        <Heading variant="blue12">This is the Heading!</Heading>
        <Heading variant="teal12" fontSize={5}>This is the Heading!</Heading>

        <Text color="blue" m={0} >
          Styled System w/ Gatsby!
        </Text>
      </Box>
    </Layout>
  )
}

export default index