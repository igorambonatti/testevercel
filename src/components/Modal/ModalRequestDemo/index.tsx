/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */

import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import axios from 'axios'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from 'styled-components'
import * as Yup from 'yup'
import Image from 'next/image'

import Button from '@components/Button'
import Backdrop from '@components/Modal/Backdrop'
import Input from '@components/Input'
import InputMask from '@components/InputMask'

import * as Validator from '@validations/RequestDemo'

import { Container, Content, Description, DescriptionSuccess, SuccessContainer, TitleSuccess } from './styles'
import getValidationErrors from '@utils/getValidationErrors'

export interface ModalRequestDemoHandles {
  openModal: () => void
}

interface Props {}

const ModalRequestDemo: React.ForwardRefRenderFunction<ModalRequestDemoHandles, Props> = ({}, ref) => {
  const { colors } = useTheme()
  const formRef = useRef<FormHandles>(null)

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const openModal = useCallback(() => {
    setSuccess(false)
    setVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  const handleSubmitModal = useCallback(async (data: Validator.FormData) => {
    try {
      setLoading(true)

      formRef.current?.setErrors({})

      await Validator.validate(data)

      const api = axios.create({
        baseURL: 'https://devapi.eurovirtual.eu',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })

      await api.post('/pre-register', data)

      setSuccess(true)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    } finally {
      setLoading(false)
    }
  }, [])
  useImperativeHandle(ref, () => {
    return { openModal }
  })

  return (
    <AnimatePresence>
      {visible && (
        <Container>
          <Backdrop>
            <Content>
              <FaTimes onClick={handleCloseModal} size={12} color={colors.white} />
              <h1>
                <Image src="/img/logo.svg" alt="Eurv" width={100} height={100} quality={100} layout="fixed" />
              </h1>

              {success ? (
                <>
                  <SuccessContainer>
                    <TitleSuccess>Success!</TitleSuccess>
                    <DescriptionSuccess>{'We will be back soon with more news.'}</DescriptionSuccess>
                  </SuccessContainer>
                  <Button onClick={handleCloseModal}>Ok</Button>
                </>
              ) : (
                <>
                  <Form ref={formRef} onSubmit={handleSubmitModal}>
                    <Input name="name" hasBorder placeholder="Nome completo" />
                    <Input name="email" hasBorder placeholder="E-mail" />
                    <Input name="phone" hasBorder placeholder="Telefone com DDD" />
                    <Button>Quero fazer parte</Button>
                  </Form>
                </>
              )}
            </Content>
          </Backdrop>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default forwardRef(ModalRequestDemo)
