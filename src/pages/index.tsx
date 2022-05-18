import React, { useCallback, useEffect, useRef } from 'react'

import { Container, Main } from '@styles/Home/styles'

import About from '@components/About'
import ProjectNFT from '@components/ProjectNFT'
import Info from '@components/Info'
import FAQ from '@components/Faq'
import Items from '@components/Items'
import Footer from '@components/Footer'
import Header from '@components/Header'
import FirstContent from '@components/FirstContent'

const Home: React.FC = props => {
  useEffect(() => {
    return () => window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Container>
        <Header />
        <Main className="main__container">
          <FirstContent />
          <About />
          <ProjectNFT />
          <Items />
          <Info />
          <FAQ />
        </Main>
        <Footer />
      </Container>
    </>
  )
}
export default Home
