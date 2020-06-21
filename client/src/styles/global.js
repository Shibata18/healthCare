import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "font-awesome/css/font-awesome.css";

createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html, #root {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;
export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;