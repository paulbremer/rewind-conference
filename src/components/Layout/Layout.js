import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../Header/Header';
import './Layout.css';

const StyledMain = styled.main`
    margin-top: -7rem;
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
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0px 1.0875rem 1.45rem`,
                        paddingTop: 0
                    }}
                >
                    <StyledMain>{children}</StyledMain>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
