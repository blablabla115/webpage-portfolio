import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbStreet from '../public/images/works/street_anime.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
  
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
              Music remmendation app for iOS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="Wallpaper" title="street" thumbnail={thumbStreet}>
              Japanese street wallpaper anime style
            </WorkGridItem>  
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
  
export default Works
