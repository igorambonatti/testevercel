import React, { useCallback } from 'react'
import { Container } from './styles'

interface Props {
  text: string
  to: string
  onClick?: () => void
  version?: 'PRIMARY' | 'SECONDARY'
}

const SectionNavItem: React.FC<Props> = ({ onClick, text, to, version = 'PRIMARY', ...props }) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [])

  return (
    <Container
      activeClass="active"
      to={to}
      spy
      smooth
      duration={100}
      offset={-85}
      onClick={handleClick}
      version={version}
      {...props}
    >
      <span>{text}</span>
    </Container>
  )
}

export default SectionNavItem
