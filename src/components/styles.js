import styled, { createGlobalStyle } from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    margin: 0px;
  }
`;

const lightTheme = {
  textColor: "black",
  backgroundColor: "white",
  brandColor: "orange",
  bigHeader: "5em",
};

const darkTheme = {
  textColor: "white",
  backgroundColor: "black",
  brandColor: "yellow",
  bigHeader: "2.5em",
};

const HelloText = styled.h1`
  font-size: ${(props) => props.theme.bigHeader};
  color: ${(props) => props.color};
`;

export { AppWrapper, GlobalStyle, darkTheme, lightTheme, HelloText };
