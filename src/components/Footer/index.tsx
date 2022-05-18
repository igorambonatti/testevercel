import React, { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Input from '@components/Input'
import SectionNavItem from '@components/SectionNavItem'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { Container, FooterContent, Top } from './styles'
import ModalSuccess, { ModalSuccessHandles } from '@components/Modal/ModalSuccess'
import * as Validator from '@validations/RequestDemo'
import axios from 'axios'
import * as Yup from 'yup'
import getValidationErrors from '@utils/getValidationErrors'
import Button from '@components/Button'

const Footer: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const modalSuccessRef = useRef<ModalSuccessHandles>(null)

  const openModalSuccess = useCallback(() => {
    modalSuccessRef.current.openModal()
  }, [])

  const submit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({})
      await Validator.preRegister(data)
      const ResultData = {
        email: data.email,
        phone_number: '+55111111111',
        name: ''
      }

      const api = axios.create({
        baseURL: 'https://devapi.eurovirtual.eu',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      await api.post('/pre-register', ResultData)
      openModalSuccess()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  }, [])
  return (
    <>
      <Container>
        <Top>
          <h1>Junte-se agora!</h1>
          <span>Tenha acesso as informações antecipadas e exclusivas do Clube NFTs.</span>
          <Form ref={formRef} onSubmit={submit}>
            <Input name="name" hasBorder placeholder="Nome completo" />
            <Input name="email" hasBorder placeholder="E-mail" />
            <Input name="phone" hasBorder placeholder="Telefone com DDD" />
            <Button>Quero fazer parte</Button>
          </Form>
        </Top>
        <FooterContent>
          <Image src="/img/logo.svg" alt="Eurv" width={150} height={150} quality={100} />
          <span>© Clube NFT, todos os direitos reservados.</span>
        </FooterContent>
      </Container>
      <ModalSuccess ref={modalSuccessRef} />
    </>
  )
}

export default Footer
