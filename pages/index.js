import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box 
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m system and informatic engineer in Peru!
        </Box>
  
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title"> 
              BlaBlaBla
            </Heading>
            <p> Digital Craftzman ( Artist / Development / Designer ) </p>
          </Box>
          <Box 
            flexShrink={0}
            mt={{ base: 4, md: 0 }} 
            ml={{ md: 6 }} 
            textAlign="center"
          >
            <Image 
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/perfil.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            BlaBlaBla is my nickname and I am a student of system and informatic engineer
            at San Antonio Abad del Cusco University, I want to specialize to software engineer
            and work outside of Peru. My short-term plan is to work in a local entity to get enough
            experience to work in another country.
            NextLink using practice {' '}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Cusco, Perú.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the University as system and informatic engineer
            at San Antonio Abad University
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♡
          </Heading>
          <Paragraph>
            DJ, {' '}
            <Link href="https://get.pxhere.com/photo/abstract-abstract-painting-acrylic-art-artistic-background-brush-canvas-close-up-color-creativity-design-graphic-illustration-messy-modern-art-paint-painting-pattern-reflection-splash-texture-travel-wall-art-wallpaper-water-1560873.jpg">
              Drawing
            </Link>
            , Hacker
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
  
export default Page
