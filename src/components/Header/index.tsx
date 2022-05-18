import React, { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Button from '@components/Button'
import SectionNavItem from '@components/SectionNavItem'
import ModalRequestDemo, { ModalRequestDemoHandles } from '@components/Modal/ModalRequestDemo'

import { Container, Content, Sections } from './styles'

interface Props {
  showSections?: boolean
}

const Header: React.FC<Props> = ({ showSections = true }) => {
  const router = useRouter()
  const modalRequestDemoRef = useRef<ModalRequestDemoHandles>(null)

  const openModalRequestDemo = useCallback(() => {
    modalRequestDemoRef.current.openModal()
  }, [])
  const toHome = useCallback(() => {
    router.push('/')
  }, [])

  return (
    <>
      <Container className="header__container">
        <Content $showSections={showSections}>
          <h1 onClick={toHome}>
            <Image src="/img/logo.svg" alt="Eurv" width={100} height={100} quality={100} layout="fixed" />
          </h1>
          {/* {showSections && (
            <Sections>
              <SectionNavItem to="first" text="How it works" />
              <SectionNavItem to="enjoy" text="Earn" />
              <SectionNavItem to="iban" text="Easy Access" />
              <SectionNavItem to="info" text="Business" />
              <SectionNavItem to="newsletter" text="Get in touch" />
            </Sections>
          )} */}
          <div>
            <a target="_blank" rel="noreferrer noopener" style={{ marginRight: '12px' }}>
              <Button onClick={openModalRequestDemo}>Cadastre-se</Button>
            </a>
          </div>
        </Content>
      </Container>
      <ModalRequestDemo ref={modalRequestDemoRef} />
    </>
  )
}

export default Header
