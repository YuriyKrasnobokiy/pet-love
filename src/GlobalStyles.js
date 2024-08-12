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

  /* Прибирає бекграунд при натисненні на моб пристроях */
  * {
  -webkit-tap-highlight-color: transparent;
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
    padding: 0 0 20px;

    @media screen and (min-width: 768px) {
      max-width: 704px;
      padding: 0 32px;
    }

    @media screen and (min-width: 1280px) {
      max-width: 1153px;
      padding: 0 63px 0 64px;
      
    }
  }

  .container-auth {
    max-width: 335px;
    margin: 0 auto;
    padding: 0 0 20px;

    @media screen and (min-width: 768px) {
      max-width: 704px;
      padding: 0 32px;
    }

    @media screen and (min-width: 1280px) {
     max-width: 1216px;
      padding: 0 32px;
      
    }
  }



  .title {
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
      font-weight: 700;
      font-size: 54px;
      margin-bottom: 44px;
    };

    @media screen and (min-width: 1280px) {
      margin-bottom: 60px;
    }
  }
`;

export default GlobalStyles;
