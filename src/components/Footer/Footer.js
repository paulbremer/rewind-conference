import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../../assets/theme';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.blue};
    background-image: ${theme.gradient.blue};
    color: white;

    section {
        margin: 0 auto;
        max-width: 1140px;
        padding: 2rem 2rem 1.5rem;
        text-align: center;
        font-size: 0.75rem;
    }

    a {
        color: white;
        text-decoration: underline;
    }
`;

const FooterItem = styled.span`
    display: block;
`;

const Footer = () => (
    <StyledFooter>
        <section>
            <FooterItem>
                &copy; {new Date().getFullYear()} <Link to="/" title="a curated list of JavaScript talks">Rewind Conference</Link>
            </FooterItem>

            <FooterItem>
                Built by <a href="https://paulbremer.nl/" rel="noopener noreferrer" target="_blank">
                    Paul Bremer
                </a> &amp; <a href="https://twitter.com/mjakoek" rel="noopener noreferrer" target="_blank">
                    Michael Koek
                </a> 🔥
            </FooterItem>

            <FooterItem>
                Designed by <a href="https://rielledegroot.com/" rel="noopener noreferrer" target="_blank"> Riëlle de Groot</a> 💅
            </FooterItem>
        </section>
    </StyledFooter>
);

export default Footer;
