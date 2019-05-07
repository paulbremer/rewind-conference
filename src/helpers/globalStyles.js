import { css, createGlobalStyle } from 'styled-components';

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

    body {
        background-color: #f2f5f8;
        background-image: url(./geometry.png);
        color: #42505c;
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

const Theme = {
    colors: {
        primary: 'rgb(235, 47, 90)',
        shadow: 'rgba(0, 0, 0, 0.06)',
        blue: 'rgb(7, 31, 200)'
    },
    gradient: {
        blue: 'linear-gradient(29deg, #071fc8, #0017b6)'
    }
}

const Reset = createGlobalStyle`${reset}`;

export {
    Reset,
    Theme,
}
