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
  max-width: 1024px;
  .body {
    background-color: #fff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0px 10px 30px #f1f3fe;
    @media ${breakpoints.m} {
      padding: 16px;
    }
    .read-more {
      margin-top: 30px;
      display: flex;
      align-items: center;
      > a {
        > span {
          margin-right: 5px;
        }
      }
    }
  }
  > span {
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #9fa1b9;
    max-width: 1134px;
    align-self: center;
    font-weight: 300;
    font-family: 'Roboto' sans-serif;
    margin-bottom: 40px;
  }
  > p {
    align-self: center;
    font-size: 28px;
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
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 8px;
  text-align: center;
  margin-bottom: 60px;
`
export const Subtitle = styled.h2`
  color: #c9d0f1;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  margin-top: 80px;
  padding-bottom: 8px;
  text-align: center;
`
export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Details = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 72px;
  border-radius: 32px;
  @media ${breakpoints.m} {
    height: 100%;
  }
  p {
    color: #9fa1b9;
    font-weight: 300;
    text-align: justify;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  h2 {
    margin-top: 32px;
    margin-bottom: 12px;
  }
  > h3 {
    margin: 12px 0px 62px;
    color: #9fa1b9;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
  }
`
