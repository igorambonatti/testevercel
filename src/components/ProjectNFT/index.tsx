// import Button from '@components/Button'
import React, { useCallback, useRef } from 'react'
import { Element } from 'react-scroll'
import { Background, Container, Content, Showcase, Card } from './styles'
import Image from 'next/image'
import Button from '@components/Button'
import ModalRequestDemo, { ModalRequestDemoHandles } from '@components/Modal/ModalRequestDemo'
const ProjectNFT: React.FC = () => {
  const modalRequestDemoRef = useRef<ModalRequestDemoHandles>(null)

  const openModalRequestDemo = useCallback(() => {
    modalRequestDemoRef.current.openModal()
  }, [])

  return (
    <Element name="first">
      <Container className="first_content__container">
        <h1>Traga seu projeto para o Clube NFT</h1>
        <Content>
          <Showcase>
            <Card>
              <Image src="/img/create.svg" alt="" priority quality={100} height={100} width={100} />
              <h1>Crie sua coleção</h1>
              <span>
                Você já tem uma ideia ou projeto? Crie sua coleção de NFTs com a gente. Nossa equipe irá lhe auxiliar em
                todo o processo.
              </span>
            </Card>
            <Card>
              <Image src="/img/page.svg" alt="" priority quality={100} height={100} width={100} />
              <h1>Uma página exclusiva</h1>
              <span>
                Sua coleção contará com uma página exclusiva e customizada. Adicione informações, imagens, banners e
                potencialize suas vendas.{' '}
              </span>
            </Card>
            <Card>
              <Image src="/img/sell.svg" alt="" priority quality={100} height={100} width={100} />
              <h1>Venda e revenda</h1>
              <span>Em nosso marketplace você poderá listar seus NFTs tanto para venda e revenda. </span>
            </Card>
          </Showcase>
        </Content>
        <Button onClick={openModalRequestDemo}>Quero me cadastrar</Button>
      </Container>
      <ModalRequestDemo ref={modalRequestDemoRef} />
    </Element>
  )
}

export default ProjectNFT
