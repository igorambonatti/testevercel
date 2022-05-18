import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 85px;
  width: 100%;
  > span {
    font-size: 20px;
    line-height: 40px;
    text-align: center;
    color: #9fa1b9;
    max-width: 1134px;
    align-self: center;
    font-weight: 300;
    font-family: 'Roboto' sans-serif;
    margin-bottom: 104px;
  }

  @media ${breakpoints.xl} {
    padding: 0 32px;
    padding-bottom: 32px;
  }

  @media ${breakpoints.xs} {
    padding: 0 16px;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 46px;
  font-weight: 600;
  margin: 69px 0 90px;
  padding-bottom: 8px;
  text-align: center;
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
export const Details = styled.div`
  max-width: 1550px;
  width: 100%;
  display: flex;
  margin-bottom: 42px;
  flex-wrap: wrap;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 144px;

  > div {
    height: 680px;
    width: 47%;
    border-radius: 32px;
    @media ${breakpoints.m} {
      width: 100%;
      height: 100%;
    }
  }
  > div:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 10px 30px #f1f3fe;
    overflow: hidden;
    margin: 20px 20px 20px 0;
    @media ${breakpoints.m} {
      margin: 20px 0;
    }
    > h1 {
      font-family: 'Roboto' sans-serif;
      max-width: 469px;
      font-style: normal;
      font-weight: 500;
      font-size: 34px;
      line-height: 46px;
      color: #575867;
      padding: 64px 64px 0 64px;
      @media ${breakpoints.m} {
        padding: 32px 32px 0 32px;
      }
    }
    > div {
      justify-content: right;
      margin-top: 64px;
    }
  }
  > div:nth-child(2) {
    background: linear-gradient(249.5deg, #3c9ef5 0%, #866edc 100%);
    box-shadow: 0px 10px 30px #f1f3fe;
    margin: 20px 0px 20px 20px;
    overflow: hidden;
    @media ${breakpoints.m} {
      margin: 20px 0;
    }
    > h1 {
      font-family: 'Roboto' sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 34px;
      line-height: 40px;
      color: #fff;
      padding: 64px 64px 0 64px;
      @media ${breakpoints.m} {
        padding: 32px 32px 0 32px;
      }
    }
    > p {
      font-family: 'Roboto' sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      color: #fff;
      padding: 27px 64px 0 64px;
      max-width: 450px;
      @media ${breakpoints.m} {
        padding: 27px 32px 0 32px;
      }
    }
  }
  > div:nth-child(3) {
    background: linear-gradient(249.5deg, #3c9ef5 0%, #866edc 100%);
    box-shadow: 0px 10px 30px #f1f3fe;
    margin: 20px 20px 20px 0;
    overflow: hidden;
    @media ${breakpoints.m} {
      margin: 20px 0;
    }
    > h1 {
      font-family: 'Roboto' sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 34px;
      line-height: 40px;
      color: #fff;
      padding: 64px 64px 0 64px;
      @media ${breakpoints.m} {
        font-size: 26px;
        line-height: 30px;
        padding: 32px 32px 0 32px;
      }
    }
  }
  > div:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 10px 30px #f1f3fe;
    margin: 20px 0px 20px 20px;
    @media ${breakpoints.m} {
      margin: 20px 0;
    }
    > h1 {
      font-family: 'Roboto' sans-serif;
      max-width: 469px;
      font-style: normal;
      font-weight: 500;
      font-size: 34px;
      line-height: 46px;
      color: #414252;
      padding: 64px 64px 0 64px;
      @media ${breakpoints.m} {
        font-size: 26px;
        padding: 32px 32px 0 32px;
        line-height: 30px;
      }
    }
  }
`
