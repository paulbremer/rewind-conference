import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #071fc8;
    background-image: linear-gradient(29deg, #071fc8, #0017b6);
    color: white;

    div {
        margin: 0 auto;
        max-width: 1140px;
        padding: 2rem 2rem 1.5rem;
        text-align: center;
    }

    a {
        color: white;
        text-decoration: underline;
    }
`;

const Footer = props => (
    <StyledFooter>
        <div>{props.children}</div>
    </StyledFooter>
);

export default Footer;
