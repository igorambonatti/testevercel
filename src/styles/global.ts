import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-display: wrap;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Kanit/Regular.ttf');
  }

  @font-face {
    font-display: wrap;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Kanit/Light.ttf');
  }

  @font-face {
    font-display: wrap;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Kanit/SemiBold.ttf');
  }

  @font-face {
    font-display: wrap;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Kanit/Bold.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select {
    font-size: 16px;
    font-family: 'Kanit', serif;
    font-style: normal;
    font-weight: 400;
  }

  body, #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;

    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;
  }
`
