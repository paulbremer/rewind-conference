import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../Header/Header';
import './Layout.css';

const StyledWrapper = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    padding: 0 1rem 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 0 2rem 1.5rem;
    }
`;

const StyledMain = styled.main`
    margin-top: calc(-7rem + 1px);

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
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <StyledWrapper>
                    <StyledMain>{children}</StyledMain>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </StyledWrapper>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
