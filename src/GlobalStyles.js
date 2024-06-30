import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    color: ${(p) => p.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(p) => p.theme.colors.mainBgColor};
  }



  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
  }

  

  button {
    display: flex;
    margin: 0 auto;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  .container {
    max-width: 335px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .title {
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    .container { 
      width: 335px;
    }
  }

    @media screen and (min-width: 768px) {
    .title {
      font-weight: 700;
      font-size: 54px;
      margin-bottom: 44px;
    }
  }

  @media screen and (min-width: 768px) {
  .container { 
  width: 704px;
  padding: 0 32px;
  }
}

@media screen and (min-width: 1200px) {
  .container { 
  width: 1136px;
  padding: 0 32px;
  }
}


`;

export default GlobalStyles;
