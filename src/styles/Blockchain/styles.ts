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
  @media ${breakpoints.m} {
    margin-top: 0px;
  }
  > span {
    font-size: 22px;
    line-height: 40px;
    text-align: center;
    color: #9fa1b9;
    max-width: 1134px;
    align-self: center;
    font-weight: 300;
    font-family: 'Roboto' sans-serif;
    margin-bottom: 40px;
    @media ${breakpoints.m} {
      font-size: 18px;
    }
  }
  > p {
    align-self: center;
    font-size: 18px;
    line-height: 40px;
    color: #9fa1b9;
  }
  > span + span {
    margin-bottom: 140px;
    @media ${breakpoints.m} {
      margin-bottom: 40px;
    }
  }

  @media ${breakpoints.xl} {
    padding: 0 32px;
    padding-bottom: 32px;
  }

  @media ${breakpoints.m} {
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
    margin-bottom: 30px;
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
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Bottom = styled.div`
  display: flex;
  height: 680px;
  margin: auto;
  width: 100%;
  background: #fff;
  box-shadow: 0px 10px 30px #f1f3fe;
  border-radius: 32px;
  max-width: 1550px;
  flex-direction: column;
  margin-bottom: 140px;
  overflow: hidden;
  margin-top: 104px;
  justify-content: center;
  align-items: center;
  @media ${breakpoints.m} {
    height: 480px;
    margin-top: 0px;
    margin-bottom: 40px;
  }
  > h1 {
    font-size: 34px;
    line-height: 46px;
    color: #575867;
    padding: 64px 64px 0;
    max-width: 700px;
    font-weight: 500;
    text-align: center;
    @media ${breakpoints.m} {
      padding: 16px 16px 0;
      font-size: 28px;
    }
  }
`
export const Details = styled.div`
  max-width: 1550px;
  width: 100%;
  height: 680px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 72px;
  background: #ffffff;
  box-shadow: 0px 10px 30px #f1f3fe;
  border-radius: 32px;
  @media ${breakpoints.m} {
    height: 100%;
    flex-direction: column;
  }
`
export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 64px;
  display: flex;
  flex-direction: column;
  @media ${breakpoints.m} {
    width: 100%;
    padding: 16px;
  }
  > h1 {
    font-size: 28px;
    line-height: 46px;
    max-width: 452px;
    font-weight: 500;
    font-family: 'Roboto' sans-serif;
  }
  > h2 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;
  }
`
export const Banner = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media ${breakpoints.m} {
    margin: 0;
    margin: 22px 0;
    margin-top: 32px;
  }
  > div {
    background: linear-gradient(249.5deg, #3c9ef5 0%, #866edc 100%);
    height: 130px;
    width: 100%;
    box-shadow: 0px 2px 4px rgba(241, 243, 254, 0.5);
    border-radius: 24px;
    display: flex;
    @media (max-width: 1250px) {
      /* padding: 12px; */
      flex-direction: column;
      justify-content: center;
    }
    align-items: center;
    justify-content: space-between;
    > div {
      margin: 0 24px;
      align-items: center;
      > h1 {
        color: #ffffff;
        font-size: 24px;
        line-height: 24px;
        font-weight: 300;
        @media ${breakpoints.m} {
          font-size: 22px;
        }
      }
      > span {
        color: #c9d0f1;
        font-size: 12px;
        line-height: 16px;
        font-weight: 300;
      }
    }
  }
`
export const ImageGroup = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  > div {
    width: 100%;
  }
`
