import breakpoints from '@styles/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  background: #f4f6ff;
  flex: 1;
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
