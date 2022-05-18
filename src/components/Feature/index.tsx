import React from 'react'

import { Container } from './styles'

interface IFeatureProps {
  imageUrl: string
  title: string
  description: string
}

const Feature: React.FC<IFeatureProps> = ({ imageUrl, title, description }) => {
  return (
    <Container className="feature__container">
      <img src={imageUrl} alt={title} />
      <span>{title}</span>
      <p>{description}</p>
    </Container>
  )
}

export default React.memo(Feature)
