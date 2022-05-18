import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContentProps {
  isFocused: boolean
  isFilled: boolean
  hasBorder: boolean
  isErrored: boolean
}
export const Container = styled.div`
  width: 100%;
  position: relative;
  span {
    position: absolute;
    bottom: 50px;
    left: 0.75rem;
    color: var(--placeholder);
    font-size: 0.87rem;
  }
`

export const Content = styled.div<ContentProps>`
  background: ${props => props.theme.colors.font};
  border-radius: ${props => (props.hasBorder ? '0.5rem' : ' 0px')};
  padding: 1rem;
  width: 100%;
  color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
  > img {
    margin-right: 0.8rem;
  }
  & + div {
    margin-top: 40px;
  }
  ${(props: ContentProps): false | FlattenSimpleInterpolation =>
    props.isErrored &&
    css`
      border: 2px solid #9d5ebd;
    `}
  ${(props: ContentProps): false | FlattenSimpleInterpolation =>
    props.isFocused &&
    css`
      color: var(--primary);
      border-color: var(--primary);
    `}
  ${(props: ContentProps): false | FlattenSimpleInterpolation =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}
  input {
    flex: 1;
    width: 100%;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.dark};
    font-size: 1rem;
    &::placeholder {
      color: ${props => props.theme.colors.dark};
      font-size: 0.87rem;
      ${(props: ContentProps): false | FlattenSimpleInterpolation =>
        props.isFocused &&
        css`
          color: transparent;
        `}
    }
  }
  svg {
    margin-right: 1rem;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
  span {
    background: #9d5ebd;
    color: #fff;
    text-align: center;
    &::before {
      border-color: #9d5ebd transparent;
    }
  }
`
