import React from 'react'
import {graphql} from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import { Text } from '../components/Text'
import { Box } from '../components/Box'
import { Heading } from '../components/Heading'
import { Flex } from '../components/Flex'

const index = ({data}) => {

  const { hero, sections } = data.sanityPage

    const fixedHeroImage = hero[0].mainImage.asset.fixed

    console.log(hero)
  // console.log(sections, 'sections')

  return (
    <Layout>


      <Box bg="gray3" p={[3,4]}>
      <Flex
      maxWidth={"1800px"}
      justifyContent="center"
      display="flex"
      >

          <Flex
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={hero[0].reversed? 'row' : 'row-reverse'}>
            <Box m={"30px"} maxWidth={"800px"}>
                <Heading color="blue12">{hero[0].heading}</Heading>
                <BlockContent blocks={hero[0]._rawBody}></BlockContent>
            </Box>

            <Img fixed={fixedHeroImage} />
          </Flex>
        </Flex>

        <Flex
      maxWidth={"1800px"}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      >
        {sections.map(item => (
          <Box  maxWidth={"1200px"}>

            <Heading fontSize={5} color="blue10">{item.title}</Heading>
            <BlockContent blocks={item._rawBody}></BlockContent>
            <Box>
            <Img fixed={item.mainImage.asset.fixed} />
            </Box>

            </Box>
        ))}
        </Flex>
      </Box>
    </Layout>
  )
}

export default index

export const query = graphql`
    query($slug: String!) {
      sanityPage(slug: {current: {eq: $slug}}) {

        _rawSlug
        title
        hero {
          _rawBody
          title
          reversed
          heading
          mainImage {
            asset {
              fixed {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
        sections {
          ... on SanitySidebyside {
            _rawBody
            title
            mainImage {
              asset {
                fixed {
                ...GatsbySanityImageFixed
                }
              }
            }
          }
        }
  }

    # allSanityPost(filter: {slug: {current: {eq: $slug}}}) {

    #   edges {
    #     node {
    #       id
    #       author {
    #         name
    #         slug {
    #           current
    #         }
    #       }
    #       _createdAt
    #       _rawSlug
    #       slug {
    #         _key
    #         _type
    #         current
    #       }
    #       body {
    #         _rawChildren
    #         _key
    #       }
    #     }
    #   }
    # }
  }

`