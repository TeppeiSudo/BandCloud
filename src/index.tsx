import React, { StrictMode } from "react";
import ReactDOM, { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./views/pages/App";
import theme from "./style/theme";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
