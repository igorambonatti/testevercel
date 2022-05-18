import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons'
import { useField } from '@unform/core'

import { Content, Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  image?: string
  hasBorder?: boolean
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, image, hasBorder = true, disabled = false, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <>
      <Container>
        {/* {(isFocused || isFilled) && <span> {props?.placeholder}</span>} */}
        <Content isFilled={isFilled} isFocused={isFocused} hasBorder={hasBorder}>
          {Icon && <Icon size={20} />}
          {image && <img src={image} height={20} alt="input-image" />}
          <input
            disabled={disabled}
            // onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...props}
          />
        </Content>
      </Container>
      {/* {error && <Error>{error}</Error>} */}
    </>
  )
}

export default Input
