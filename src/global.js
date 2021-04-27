import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text };
        font-family: sans-serif;
        transition: all 0.2s linear;
    }
`