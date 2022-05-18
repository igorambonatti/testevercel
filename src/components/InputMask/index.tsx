/* eslint-disable no-param-reassign */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import ReactNumberFormat, { NumberFormatProps } from 'react-number-format'

import { useField } from '@unform/core'
import { Container, ContainerLabel, ContentInput } from './styles'
import { useTheme } from 'styled-components'

interface Props extends NumberFormatProps {
  name: string
  label: string
  isRequired?: boolean
  classNameContainer?: string
}

const InputMask: React.FC<Props> = ({
  name,
  label,
  value = null,
  disabled,
  isRequired,
  classNameContainer,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentInputRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLLabelElement>(null)
  const inputRef = useRef<NumberFormatProps | null>(null)

  const { colors } = useTheme()

  const { fieldName, defaultValue, registerField, error, clearError } = useField(name)

  const [valueDefault, setValueDefault] = useState(value || defaultValue)

  const handleInputFocus = useCallback(() => {
    const contentInput = contentInputRef.current
    const labelInput = labelRef.current

    if (contentInput && labelInput) {
      contentInput.style.borderColor = colors.primary
      labelInput.style.color = colors.text
    }

    clearError()
  }, [colors, clearError])

  const handleInputBlur = useCallback(() => {
    const contentInput = contentInputRef.current
    if (contentInput) {
      contentInput.style.borderColor = colors.grayExtraLight
    }
  }, [colors])

  const handleChange = useCallback(e => {
    setValueDefault(e.value)
  }, [])

  const showLabel = useMemo(() => {
    return error || label
  }, [error, label])

  useEffect(() => {
    setValueDefault(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    if (error) {
      const labelInput = labelRef.current
      const contentInput = contentInputRef.current

      if (labelInput && contentInput) {
        labelInput.style.color = colors.error
        contentInput.style.borderColor = colors.error
      }
    }
  }, [error, colors])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: NumberFormatProps) => {
        return ref.value || null
      },
      setValue: (ref: NumberFormatProps, newValue: string | number | null) => {
        ref.value = newValue || undefined
      }
    })
  }, [fieldName, registerField])

  return (
    <Container ref={containerRef} className={`${classNameContainer} input_mask__container`} $isDisabled={!!disabled}>
      {showLabel && (
        <ContainerLabel>
          {error && <FiAlertCircle size={16} color={colors.error} />}
          <label ref={labelRef} htmlFor={name}>
            {showLabel}
            {!error && isRequired && <small>*</small>}
          </label>
        </ContainerLabel>
      )}
      <ContentInput ref={contentInputRef} className="input_mask__content">
        <ReactNumberFormat
          getInputRef={inputRef}
          name={fieldName}
          defaultValue={valueDefault}
          value={valueDefault}
          isNumericString
          allowNegative={false}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onValueChange={handleChange}
          disabled={disabled}
          {...props}
        />
      </ContentInput>
    </Container>
  )
}

export default InputMask
