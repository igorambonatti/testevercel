// import Button from '@components/Button'
import React from 'react'
import { Element } from 'react-scroll'
import { Background, Container, Content, Group } from './styles'
import Image from 'next/image'
import Button from '@components/Button'
import Faq from 'react-faq-component'

const About: React.FC = () => {
  const data = {
    rows: [
      {
        title: 'O que é blockchain?',
        content: `A Blockchain pode ser considerada como um grande livro razão único, público, imutável e compartilhado por todos os usuários simultaneamente, utilizado para registrar transações com máxima segurança.
        O CLUBE NFT utiliza a blockchain POLYGON, uma das mais importantes e seguras blockchains do mundo. Os NFTs são mintados (criados / registrados) em uma blockchain.`
      },
      {
        title: 'O que são NFTs?',
        content:
          'NFT é a sigla de Non Fungible Token (Token Não Fungível). Em resumo, um NFT é uma propriedade digital, igualzinha à propriedade sobre um imóvel (registrado no registro de imóevis), ou sobre um veículo (registrado no DETRAN). Assim, o NFT é uma propriedade sobre um arquivo digital único e insubstituível, e o seu registro de propriedade ocorre em uma Blockchain.'
      },
      {
        title: 'O que pode ser registrado (mintado) com um NFT?',
        content:
          'Qualquer arquivo digital pode ser registrado - (o termo utilizado é mintado) - como um NFT. Os NFTs podem ser um áudio, vídeo, imagem, post, gif, etc.'
      },
      {
        title: 'Como eu crio um NFT?',
        content:
          'Aqui no CLUBE NFT você poderá criar a sua coleção de NFTs e vendê-los em nossa plataforma, recebendo royalties. Nossa equipe de especialistas poderá assessorá-lo em todo o processo, desde a estratégia de lançamento, criação dos designs, mintagem dos NFTs na blockchain e venda em nossa plataforma. Contate-nos para mais informações.'
      },
      {
        title: 'Como eu vendo um NFT?',
        content:
          'Aqui no CLUBE NFT você poderá vender seus NFTs, definindo o preço para a primeira venda e os royalties que você receberá cada vez que seu NFT for revendido em nosso marketplace.'
      },
      {
        title: 'Como mensurar o valor de um NFT?',
        content:
          'O valor de mercado de um NFT depende de diversos fatores. Um dos principais elementos é o grau de raridade, ou seja, o quão exclusivo é um determinado NFT. Geralmente, categorias de NFTs únicos, ou com poucas edições, são mais raros e valiosos. Já nas coleções, determinados NFTs possuem características específicas que combinadas os transformam em únicos, elevando seu grau de raridade. Da mesma forma, grande parte dos NFTs dão acesso à determinadas vantagens, tais como acesso à experiências e produtos exclusivos, descontos, prioridades em shows e eventos, etc. Tais elementos podem agregar elevado valor a um NFT ou coleção de NFTs.'
      }
    ]
  }

  const styles = {
    bgColor: 'transparent',
    // rowContentColor: 'grey',
    arrowColor: 'white'
  }

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  }
  return (
    <Element name="first">
      <Container className="first_content__container">
        <Content>
          <Group>
            <h1>Perguntas frequentes (FAQ)</h1>
            <Faq data={data} styles={styles} config={config} />
          </Group>
        </Content>
      </Container>
    </Element>
  )
}

export default About
