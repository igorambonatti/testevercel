import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'
import { rgba, shade } from 'polished'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  @media ${breakpoints.xxs} {
    padding: 16px 0;
  }
`
export const FooterContent = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 32px;
  justify-content: center;
  flex-direction: column;
  height: 320px;
  > span {
    color: ${props => props.theme.colors.gray};
  }
`
export const Top = styled.div`
  overflow: hidden;
  width: 50%;
  @media ${breakpoints.m} {
    width: 100%;
  }
  background-color: ${props => props.theme.colors.purple};
  border-radius: 32px 32px 0px 0px;
  margin: auto;
  height: 826px;
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    color: ${({ theme }) => theme.colors.font};
    font-size: 46px;
    font-weight: 600;
    line-height: 52px;
    text-align: center;
    margin-bottom: 48px;
  }
  > span {
    color: ${({ theme }) => theme.colors.font};
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 72px;
    width: 480px;
    max-width: 90%;
  }
  > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${breakpoints.m} {
      width: 80%;
    }
    > div + div {
      margin-top: 30px;
    }
    > button {
      background-color: ${({ theme }) => theme.colors.font};
      color: ${({ theme }) => theme.colors.purple};
      width: 215px;
      margin-top: 48px;
    }
  }
`
