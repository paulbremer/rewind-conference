import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.blue};
    background-image: ${({ theme }) => theme.gradient.blue};
    color: ${({ theme }) => theme.colors.white};

    section {
        margin: 0 auto;
        max-width: 1140px;
        padding: 2rem 2rem 1.5rem;
        text-align: center;
    }

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: underline;
    }
`;

const Footer = () => (
    <StyledFooter>
        <section>
            <div>&copy; {new Date().getFullYear()} Rewind Conference</div>

            <div>
                Built by{' '}
                <a href="https://paulbremer.nl/" rel="noopener noreferrer" target="_blank">
                    Paul Bremer
                </a>{' '}
                &amp;{' '}
                <a href="https://twitter.com/mjakoek" rel="noopener noreferrer" target="_blank">
                    Michael Koek
                </a>{' '}
                🔥
            </div>

            <div>
                Designed by{' '}
                <a href="https://rielledegroot.com/" rel="noopener noreferrer" target="_blank">
                    Riëlle de Groot
                </a>{' '}
                💅
            </div>
        </section>
    </StyledFooter>
);

export default Footer;
