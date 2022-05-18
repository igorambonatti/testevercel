import { rgba, shade } from 'polished'
import styled, { css } from 'styled-components'

import breakpoints from '@styles/breakpoints'
import { Link } from 'react-scroll'

interface ContainerProps {
  version: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled(Link)<ContainerProps>`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  list-style: none;
  transition: 0.15s linear;

  &:hover {
    color: #575867;
    opacity: 0.5;
  }

  & + a {
    margin-left: 40px;
  }

  &.active {
    color: #575867;
    font-weight: 400;
    pointer-events: none;
    opacity: 0.5;
  }

  ${props =>
    props.version === 'SECONDARY' &&
    css`
      color: ${props.theme.colors.white};
      font-weight: lighter;
      margin: 5px 0;
      opacity: 0.9;
      &:hover {
        color: ${shade(0.2, props.theme.colors.primary)};
      }

      &.active {
        color: ${shade(0.35, props.theme.colors.primary)};
      }
    `}

  @media ${breakpoints.l} {
    & + li {
      margin-left: 40px;
    }
  }
`
