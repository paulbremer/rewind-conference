import { css, createGlobalStyle } from 'styled-components';
import GeometryPattern from '../assets/images/patroon.svg';

const reset = css`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500');

    html, body {
        font-family: 'Noto Sans', 'Helvetica', sans-serif;
        font-size: 15px;
    }

    html, body, div, span,
    h1, h2, h3, h4, h5, h6, p, blockquote,
    a, address, img, strong, dl, dt, dd, ol, ul, li,
    fieldset, form, label,
    table, tbody, tfoot, thead, tr, th, td,
    article, aside, footer, header, main, nav, section {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    ol,
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img,
    embed,
    iframe,
    object {
        max-width: 100%;
    }
`;

const cosmetics = {
    sidePadding: '2rem',
    breakpoint: {
        sm: 'screen and (min-width: 768px)',
    },
    bgPattern: `url(${GeometryPattern})`,
}

const Theme = {
    ...cosmetics,
    colors: {
        dark: '#42505c',
        light: '#f2f5f8',
        white: 'white',
        primary: '#eb2f5a',
        shadow: '#00000060',
        blue: '#071fc8',
        red: '#eb2f5a',
    },
    gradient: {
        blue: 'linear-gradient(29deg, #071fc8, #0017b6)',
    },
};

const DarkTheme = {
    ...cosmetics,
    colors: {
        dark: '#42505c',
        light: '#1b2938',
        white: '#d8d8d8',
        primary: '#941935',
        shadow: '#00000060',
        blue: '#1b214e',
        red: '#eb2f5a',
    },
    gradient: {
        blue: 'linear-gradient(29deg, #1b214e, #112192)',
    },
};

const Reset = createGlobalStyle`${reset}`;

export {
    Reset,
    Theme,
    DarkTheme,
};
