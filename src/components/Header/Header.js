import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
    background-image: linear-gradient(29deg, #071fc8, #0017b6);
    margin-bottom: 1.45rem;

    div {
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
    }

    h1 {
        margin: 0;
    }

    h2 {
        color: #fff;
    }
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <div>
            <h1>
                <StyledLink to="/">{siteTitle}</StyledLink>
            </h1>
            <h2>
                Get the best of conferences with Rewind. The top 10 video’s for developers every
                month.{' '}
            </h2>
        </div>
    </StyledHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
