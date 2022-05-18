import { rgba } from 'polished'
import styled, { css } from 'styled-components'

interface ContainerProps {
  $isDisabled: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  width: 100%;

  ${props =>
    props.$isDisabled &&
    css`
      label {
        color: ${props.theme.colors.grayExtraLight};
      }

      input {
        background-color: ${rgba(props.theme.colors.grayExtraLight, 0.2)};
        border-color: ${rgba(props.theme.colors.primary, 0.5)};
        border-radius: none;
        color: ${props.theme.colors.grayExtraLight};
        pointer-events: none;
        user-select: none;
      }
    `}
`

export const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  svg {
    margin-right: 4px;
  }

  label {
    font-size: 14px;
    transition: all 0.15s linear;

    small {
      color: ${props => props.theme.colors.red};
    }
  }
`

export const ContentInput = styled.div`
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.grayExtraLight};
  border-radius: 8px;
  transition: all 0.2s ease 0s;

  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;

  input {
    border: none;
    border-radius: 8px;
    padding: 0 16px;

    flex: 1;

    width: 100%;
    height: 100%;
  }
`
