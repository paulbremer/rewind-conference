import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../assets/images/rewind-logo.png';

const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.blue};
    background-image: ${({ theme }) => theme.gradient.blue};
    padding: 0 ${({ theme }) => theme.sidePadding};
    display: flex;

    h1 {
        font-size: 0;
        color: white;
    }

    img {
        max-width: 200px;
    }
`;

const Container = styled.section`
    margin: 0 auto;
    max-width: 1140px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0 5rem;
    @media screen and (min-width: 768px) {
        padding: 4rem 2rem 7rem;
    }
`;

const Tagline = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    margin: 2.25rem 0;
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: inline-block;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const TitelItems = styled.div`
    flex: 1;
`;

const ToggleContainer = styled.div`
    position: absolute;
    top: 12px;
    right: 0;
    @media screen and (min-width: 768px) {
        position: relative;
    }
`;

const Header = ({ siteTitle, darkmodeToggle }) => (
    <StyledHeader>
        <Container>
            <InnerContainer>
                <TitelItems>
                    <h1>
                        <StyledLink to="/" title="Rewind Conference Logo">
                            <img src={logo} alt={siteTitle} />
                            Rewind Conference
                        </StyledLink>
                    </h1>
                    <Tagline>
                        Get the best of conferences with Rewind. Every month a new curated list of
                        JavaScript talks.
                    </Tagline>
                </TitelItems>
                <ToggleContainer>{darkmodeToggle}</ToggleContainer>
            </InnerContainer>
        </Container>
    </StyledHeader>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
    darkmodeToggle: PropTypes.element
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
