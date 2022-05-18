import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
interface ContentProps {
  isFocused: boolean
  isFilled: boolean
  hasBorder: boolean
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
  background: #f4f6ff;
  border-radius: 12px;
  border-radius: ${props => (props.hasBorder ? '0.625rem' : ' 0px')};
  padding-left: 19px;
  width: 100%;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  > img {
    margin-right: 20px;
  }
  & + div {
    margin-top: 40px;
  }

  input {
    flex: 1;
    width: 100%;
    background: transparent;
    border: 0;
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    height: 64px;
    &::placeholder {
      color: var(--placeholder);
      font-size: 16px;
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
export const Error = styled.span`
  font-size: 14px;
  color: #9d5ebd;
  text-align: right;
`
