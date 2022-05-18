import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
  loading?: boolean
  border?: boolean
}

const Button: React.FC<Props> = ({ children, outline, type = 'button', border = false, loading = false, ...rest }) => {
  return (
    <Container outline={outline} border={border} type={type} {...rest}>
      {children}
    </Container>
  )
}

export default Button
