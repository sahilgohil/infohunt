import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NewsContextProvider } from "./components/NewsContext";
import {
  BrowserRouter
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NewsContextProvider>
        <BrowserRouter>
              <App />
        </BrowserRouter>
    </NewsContextProvider>

);


reportWebVitals();
