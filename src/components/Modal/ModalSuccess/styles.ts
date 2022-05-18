import { motion } from 'framer-motion'
import { rgba } from 'polished'
import styled from 'styled-components'

import breakpoints from '@styles/breakpoints'

export const Container = styled.div``

export const Content = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 0 20px ${props => rgba(props.theme.colors.black, 0.4)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 420px;
  min-height: 487px;
  overflow: auto;
  padding: 36px 24px;
  position: relative;

  z-index: 2;
  button {
    width: 100%;
    text-align: center;
  }
  h1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 30px;
  }
  > svg {
    cursor: pointer;

    position: absolute;
    top: 16px;
    right: 16px;
  }

  img {
    width: 98px;
    height: auto;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    > div {
      margin: 20px 0;
    }
    button {
      margin-top: 12px;
      align-self: center;
      width: 100%;
      text-align: center;
    }
  }

  @media ${breakpoints.sm} {
    width: calc(100% - 32px) !important;
    padding-top: 32px;
  }

  @media ${breakpoints.sm} {
    form {
      width: 100%;
    }
  }
`

export const Description = styled.p`
  margin: 16px 0;
  text-align: center;
  width: 100%;
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const TitleSuccess = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 10px;
`

export const DescriptionSuccess = styled.span`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  max-width: 255px;
`
