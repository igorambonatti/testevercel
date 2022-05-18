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

export interface ModalSuccessHandles {
  openModal: () => void
}

interface Props {}

const ModalSuccess: React.ForwardRefRenderFunction<ModalSuccessHandles, Props> = ({}, ref) => {
  const { colors } = useTheme()

  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setVisible(false)
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
              <FaTimes onClick={handleCloseModal} size={12} color={colors.black} />
              <h1>
                <Image src="/img/eurv.webp" alt="Eurv" width={43} height={50} quality={100} layout="fixed" />
              </h1>
              <SuccessContainer>
                <TitleSuccess>Success!</TitleSuccess>
                <DescriptionSuccess>{'We will be back soon with more news.'}</DescriptionSuccess>
              </SuccessContainer>
              <Button onClick={handleCloseModal}>Ok</Button>
            </Content>
          </Backdrop>
        </Container>
      )}
    </AnimatePresence>
  )
}

export default forwardRef(ModalSuccess)
