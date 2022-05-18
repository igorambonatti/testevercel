import { rgba, shade } from 'polished'
import styled from 'styled-components'

import breakpoints from '@styles/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  justify-content: center;
  align-items: center;
  margin: 104px auto;
  > button {
    width: 250px;
  }
  h1 {
    color: ${({ theme }) => theme.colors.font};
    font-size: 46px;
    font-weight: 600;
    line-height: 52px;
    max-width: 585px;
    text-align: center;
    margin-bottom: 72px;
  }
  @media ${breakpoints.xl} {
    padding: 0 32px;
  }
`
export const Group = styled.div`
  button {
    width: 227px;
  }
  @media ${breakpoints.m} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    margin-bottom: 104px;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.colors.font};
    font-size: 46px;
    font-weight: 600;
    line-height: 52px;
    max-width: 585px;
  }

  span {
    font-size: 16px;
    line-height: 26px;
    font-weight: lighter;
    font-family: 'Roboto' sans-serif;
    color: ${({ theme }) => theme.colors.font};
  }

  @media ${breakpoints.l} {
    /* padding: 0 32px; */
  }

  @media ${breakpoints.m} {
    justify-content: center;
    flex-direction: column-reverse;
    h2 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media ${breakpoints.sm} {
    align-items: center;
    text-align: center;
    margin-top: 16px;

    h2 {
      font-size: 34px;
      line-height: 66px;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      width: 100%;
    }
  }

  @media ${breakpoints.xs} {
    padding: 0 16px;

    h2 {
      font-size: 36px;
      line-height: 48px;
      text-align: center;
      width: 100%;
    }

    p {
      font-size: 18px;
      line-height: 28px;
      text-align: center;
    }
  }
`

export const Background = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  overflow: hidden;
  z-index: -1;
  height: 160vh;

  @media ${breakpoints.sm} {
    opacity: 0.15;
    height: 470px;
  }
`
export const Showcase = styled.div`
  display: flex;
  margin-bottom: 64px;
  flex: 1;
  width: 100%;
  align-items: start;
  @media ${breakpoints.sm} {
    flex-direction: column;
    > div + div {
      margin-top: 32px;
    }
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  > span {
    font-size: 0.9rem;
    line-height: 28px;
    text-align: center;
  }
  > h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
  > img {
    border-radius: 8px;
    background-color: ${props => props.theme.colors.dark};
    height: 80px;
    width: 80px;
    margin-bottom: 24px;
  }
`
