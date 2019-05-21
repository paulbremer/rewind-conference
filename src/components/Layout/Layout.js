import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Reset, Theme, DarkTheme } from '../../helpers/globalStyles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Toggle from '../Toggle/Toggle';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    padding: 0 1rem 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 0 2rem 1.5rem;
    }
`;

const StyledMain = styled.main`
    margin-top: -5rem;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const Background = styled.div`
    transition: background-color .25s ease-out;
    background-color: ${({ theme }) => theme.colors.light};
    background-image: ${({ theme }) => theme.bgPattern};
    color: ${({ theme }) => theme.colors.dark};
`;

const Layout = ({ children }) => {
    const [darkMode, setDarkmode] = useState(false);

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const isReturningUser = 'dark' in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const typeScheme = isReturningUser ? savedMode : 'getPrefColorScheme()';

        setDarkmode(typeScheme);
    }, []);

    // const getPrefColorScheme = () => {
    //     if (!window.matchMedia) return;
    //     return window.matchMedia('(prefers-color-scheme: dark)').matches;
    // }

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <ThemeProvider theme={darkMode ? DarkTheme : Theme }>
                    <Background className="bg-test">
                        <Reset />
                        <Header 
                            siteTitle={data.site.siteMetadata.title}
                            darkmodeToggle={
                                <Toggle
                                    isActive={darkMode}
                                    onChange={() => setDarkmode(prevMode => !prevMode)} 
                                />
                            }
                        />

                        <Container>
                            <StyledMain>{children}</StyledMain>
                        </Container>

                        <Footer />
                    </Background>
                </ThemeProvider>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
