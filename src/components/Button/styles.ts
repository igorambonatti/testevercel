/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import { shade } from 'polished'

interface ButtonProps {
  outline: boolean
  border: boolean
}

export const Container = styled.button<ButtonProps>`
  background: ${props => (props.disabled ? '#ccc' : props.outline ? 'transparent' : props.theme.colors.purple)};
  border-radius: 4rem;
  border: ${props => (props.border ? '2px solid #fff' : '0')};
  color: ${props => props.theme.colors.font};
  line-height: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.87rem;
  width: 100%;
  height: 48px;
  transition: 0.2s linear;
  &:hover {
    background: ${shade(0.2, '#6A80E4')};
    background: ${props => (props.disabled ? '#ccc' : shade(0.2, props.theme.colors.purple))};
    background: ${props =>
      props.disabled ? '' : props.outline ? 'transparent' : shade(0.2, props.theme.colors.purple)};
    color: ${props => (props.disabled ? '' : props.outline ? props.theme.colors.purple : props.theme.colors.font)};
    border: ${props => (props.border ? `2px solid ${props.theme.colors.purple}` : '0')};
  }
`
