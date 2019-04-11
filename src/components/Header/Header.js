import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../assets/images/rewind-logo.png';

const StyledHeader = styled.header`
    background-image: linear-gradient(29deg, #071fc8, #0017b6);
    margin-bottom: 1.45rem;
    padding-bottom: 5rem;

    div {
        margin: 0 auto;
        max-width: 1140px;
        padding: 2rem 2rem 1.5rem;
    }

    h1 {
        margin: 0;

        @media screen and (min-width: 768px) {
            margin-top: 2rem;
        }
    }

    img {
        max-width: 200px;
    }

    h2 {
        color: #fff;
        font-size: 1.2rem;
        margin: 1.5rem 0;

        @media screen and (min-width: 768px) {
            margin-bottom: 3rem;
        }
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
                <StyledLink to="/">
                    <img src={logo} alt={siteTitle} />
                </StyledLink>
            </h1>
            <h2>
                Get the best of conferences with Rewind. Every month a new curated list of
                JavaScript talks.
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
