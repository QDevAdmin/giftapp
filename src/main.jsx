import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {createGlobalStyle} from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system-body, BlinkMacSystemFont, sans-serif;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    html, body, root {
        background: white;
    }
`;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>,
)
