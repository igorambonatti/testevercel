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
  margin: 0 auto;
  margin-top: 85px;
  margin: 0 32px;
  @media ${breakpoints.m} {
    margin: 0;
    padding: 16px;
  }
  > span {
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #9fa1b9;
    max-width: 1550px;
    align-self: center;
    font-weight: 300;
    font-family: 'Roboto' sans-serif;
    margin-bottom: 40px;
    background: #ffffff;
    padding: 64px;
    box-shadow: 0px 10px 30px #f1f3fe;
    border-radius: 32px;
    @media ${breakpoints.m} {
      padding: 16px;
    }
  }
  > p {
    align-self: center;
    font-size: 24px;
    line-height: 40px;
    color: #9fa1b9;
    margin-bottom: 104px;
  }
  > span + span {
    margin-bottom: 140px;
  }

  @media ${breakpoints.xs} {
    padding: 0 16px;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 44px;
  font-weight: 600;
  margin: 69px 0 90px;
  padding-bottom: 8px;
  text-align: center;
  max-width: 1147px;
  align-self: center;
  @media ${breakpoints.m} {
    font-size: 36px;
  }
`
export const Subtitle = styled.h2`
  color: #c9d0f1;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  margin-top: 120px;
  padding-bottom: 8px;
  text-align: center;
`
export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Cards = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
export const Bottom = styled.div`
  display: flex;
  height: 680px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 10px 30px #f1f3fe;
  border-radius: 32px;
  max-width: 1550px;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 140px;
  > h1 {
    font-size: 34px;
    line-height: 46px;
    color: #575867;
    padding: 64px 64px 0;
    max-width: 700px;
    font-weight: 500;
  }
`
export const Details = styled.div`
  max-width: 1550px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 40px;
  background: #ffffff;
  box-shadow: 0px 10px 30px #f1f3fe;
  border-radius: 32px;
  padding: 64px;
  overflow: hidden;
  @media ${breakpoints.m} {
    padding: 16px;
  }
`
export const BottomDetails = styled.div`
  max-width: 1550px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-bottom: 104px;
  background: #ffffff;
  box-shadow: 0px 10px 30px #f1f3fe;
  border-radius: 32px;
  padding: 64px;
  @media ${breakpoints.m} {
    flex-direction: column;
    padding: 16px;
  }
`
export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  height: 516px;
  @media ${breakpoints.m} {
    flex-direction: column;
    padding: 0 16px;
  }
  > div {
    display: flex;
    flex-direction: column;
    > h2 {
      font-weight: 500;
      font-size: 26px;
      line-height: 46px;
      color: #575867;
      max-width: 507px;
    }
  }
`

export const ButtonContainer = styled.button`
  background: transparent;
  border: none;
  height: 30px;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;
  margin-top: auto;
  margin-right: auto;
  > span {
    margin-right: 30px;
  }
`
