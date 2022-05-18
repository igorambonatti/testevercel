import breakpoints from '@styles/breakpoints'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'

interface ContentProps {
  $showSections?: boolean
}
export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  /* box-shadow: 0 3px 6px ${({ theme }) => rgba(theme.colors.text, 0.05)}; */
  width: 100%;
  height: 85px;
  position: fixed;
  top: 0;
  z-index: 1;
`

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => (props.$showSections ? '1400px' : '1400px')};
  height: 100%;
  padding: 0 40px;
  @media (max-width: 1045px) {
    justify-content: space-between;
    padding: 0 10px;
  }
  h1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    > span {
      margin-left: 14px;
      font-size: 24px;
    }
  }

  @media ${breakpoints.l} {
    max-width: 100%;
    padding: 0 32px;
  }

  @media ${breakpoints.xs} {
    padding: 0 16px;

    button {
      width: 80px;
    }
  }
  @media ${breakpoints.m} {
    padding: 0 8px;
    font-size: 12px;

    button {
      /* font-size: 10px; */
      text-align: center;
    }
  }
  @media (max-width: 375px) {
    padding: 0 2px;
    button {
      font-size: 8px;
      text-align: center;
    }
  }
`

export const Sections = styled.nav`
  display: flex;

  @media (max-width: 1045px) {
    display: none;
  }
  @media ${breakpoints.sm} {
    display: none;
  }
  @media ${breakpoints.m} {
    display: none;
  }
`
