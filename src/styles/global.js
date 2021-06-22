import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
        color: ${(props) => props.theme.colors.primaryText};
        font: 400 16px Roboto, sans-serif;
        overflow-x: hidden;
    }
    h1 {
      font: 400 16px Raleway, sans-serif;
      color: ${(props) => props.theme.colors.primaryText};
    }
    p {
      color: ${(props) => props.theme.colors.primaryText};
    }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway-VariableFont_wght.ttf");
}
`;
