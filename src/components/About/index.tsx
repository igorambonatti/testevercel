// import Button from '@components/Button'
import React, { useCallback, useRef } from 'react'
import { Element } from 'react-scroll'
import { Background, Container, Content, Group } from './styles'
import Image from 'next/image'
import Button from '@components/Button'
import ModalRequestDemo, { ModalRequestDemoHandles } from '@components/Modal/ModalRequestDemo'

const About: React.FC = () => {
  const modalRequestDemoRef = useRef<ModalRequestDemoHandles>(null)

  const openModalRequestDemo = useCallback(() => {
    modalRequestDemoRef.current.openModal()
  }, [])
  return (
    <Element name="first">
      <Container className="first_content__container">
        <Content>
          <Image src="/img/about.webp" priority alt="Platform" quality={100} height={650} width={650} />
          <Group>
            <h2>Compre das principais coleções</h2>
            <p>
              Quer encontrar aquela coleção que está em alta? <br /> Procure e busque NFTs utilizando os nossos filtros
              por categoria.
            </p>
            <a target="_blank" rel="noreferrer noopener">
              <Button onClick={openModalRequestDemo}>Quero me cadastrar</Button>
            </a>
          </Group>
        </Content>
      </Container>
      <ModalRequestDemo ref={modalRequestDemoRef} />
    </Element>
  )
}

export default About
