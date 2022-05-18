import React, { useEffect } from 'react'

import { Container } from './styles'

const Backdrop: React.FC = ({ children }) => {
  useEffect(() => {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.height = 'initial'
      document.body.style.overflow = 'initial'
    }
  }, [])

  return <Container>{children}</Container>
}

export default Backdrop
