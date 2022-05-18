import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 auto;
  margin-top: 85px;
  padding-bottom: 32px;
  width: 100%;
  max-width: 1440px;

  @media ${breakpoints.xl} {
    padding: 0 32px;
    padding-bottom: 32px;
  }

  @media ${breakpoints.xs} {
    padding: 0 16px;
  }
`

export const Title = styled.h2`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayExtraLight};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-weight: 700;
  margin: 32px 0;
  padding-bottom: 8px;
  text-align: center;
`

export const SuperSubtitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0 8px;
`

export const Text = styled.p`
  display: block;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;

  & + p {
    margin-top: 8px;
  }
`

export const ButtonToPrivacyPolicy = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
`
