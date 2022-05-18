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
          <Group>
            <h2>Encontre os itens mais populares</h2>
            <p>
              Descubra, compre e colecione os principais NFTs do momento. <br /> Aproveite para comprar e revender esses
              itens no marketplace.
            </p>
            <a target="_blank" rel="noreferrer noopener">
              <Button onClick={openModalRequestDemo}>Quero me cadastrar</Button>
            </a>
          </Group>
          <Image src="/img/popular-items.webp" priority alt="Platform" quality={100} height={650} width={650} />
        </Content>
      </Container>
      <ModalRequestDemo ref={modalRequestDemoRef} />
    </Element>
  )
}

export default About
