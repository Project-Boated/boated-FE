import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body * {
    font-family: Noto Sans KR, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const fontFace = `
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    src: url("/fonts/NotoSansKR-Bold.otf") format("truetype");
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url("/fonts/NotoSansKR-Medium.otf") format("truetype");
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
  }
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 700;
    src: url("/fonts/GmarketSansBold.otf") format("truetype");
  }
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 500;
    src: url("/fonts/GmarketSansMedium.otf") format("truetype");
  }
  @font-face {
    font-family: 'Gmarket Sans';
    font-weight: 400;
    src: url("/fonts/GmarketSansLight.otf") format("truetype");
  }
`;
