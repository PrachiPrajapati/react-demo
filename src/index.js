import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./shared/store/index";

function Index() {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    // </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
