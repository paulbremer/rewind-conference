import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Reset, Theme } from '../../helpers/globalStyles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    padding: 0 1rem 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 0 2rem 1.5rem;
    }
`;

const StyledMain = styled.main`
    margin-top: calc(-7rem - 1px);

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const Layout = ({ children }) => (
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
            <ThemeProvider theme={Theme}>
                <React.Fragment>
                    <Reset />
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <Container>
                        <StyledMain>{children}</StyledMain>
                    </Container>
                    <Footer />
                </React.Fragment>
            </ThemeProvider>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
