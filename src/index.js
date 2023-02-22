import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NewsContextProvider } from "./components/NewsContext";
import {
  BrowserRouter
} from "react-router-dom";
import { ThemeContextProvider } from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextProvider>
        <NewsContextProvider>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
        </NewsContextProvider>
    </ThemeContextProvider>

);


reportWebVitals();
