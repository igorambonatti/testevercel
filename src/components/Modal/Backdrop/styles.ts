import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => rgba(props.theme.colors.black, 0.5)};
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1;
`
