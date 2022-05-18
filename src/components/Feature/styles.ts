import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 150px;

  max-width: 445px;

  img {
    width: 64px;
    height: 64px;
  }

  span {
    color: ${props => props.theme.colors.primary};
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
    margin-top: 20px;
    margin-bottom: 16px;
  }

  p {
    line-height: 26px;
  }

  @media ${breakpoints.l} {
    max-width: 410px;
  }

  @media ${breakpoints.m} {
    margin-bottom: 90px;
    max-width: 320px;

    img {
      width: 50px;
      height: 50px;
    }

    span {
      font-size: 24px;
      line-height: 36px;
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }

  @media ${breakpoints.sm} {
    align-items: center;
    margin-bottom: 40px;
    max-width: 100%;

    p {
      text-align: center;
    }
  }
`
