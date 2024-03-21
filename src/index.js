import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../styles/globals.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const rootElement = document.getElementById("root");
if(rootElement.hasChildNodes()){
  hydrate(App, rootElement);
}else{
  render(App , rootElement)
}

reportWebVitals();