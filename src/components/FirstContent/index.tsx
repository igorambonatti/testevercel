// import Button from '@components/Button'
import React, { useCallback, useRef } from 'react'
import { Element } from 'react-scroll'
import { Background, Container, Content, Group } from './styles'
import Image from 'next/image'
import Button from '@components/Button'
import ModalRequestDemo, { ModalRequestDemoHandles } from '@components/Modal/ModalRequestDemo'

const FirstContent: React.FC = () => {
  const modalRequestDemoRef = useRef<ModalRequestDemoHandles>(null)

  const openModalRequestDemo = useCallback(() => {
    modalRequestDemoRef.current.openModal()
  }, [])
  return (
    <Element name="first">
      <Container className="first_content__container">
        <Content>
          <Group>
            <h2>{'Colecione e venda seus NFTs via PIX!'}</h2>
            <p>O Clube NFT é o primeiro marketplace de NFts do Brasil que aceitará PIX como forma de pagamento.</p>
            <a target="_blank" rel="noreferrer noopener">
              <Button onClick={openModalRequestDemo}>Quero me cadastrar</Button>
            </a>
          </Group>
          <Image src="/img/initial.webp" priority alt="Platform" quality={100} height={700} width={650} />
        </Content>
      </Container>
      <ModalRequestDemo ref={modalRequestDemoRef} />
    </Element>
  )
}

export default FirstContent
