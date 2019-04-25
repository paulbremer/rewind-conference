import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../assets/theme';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.blue};
    background-image: ${theme.gradient.blue};
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

const Footer = props => {
    const { children } = props;
    return (
        <StyledFooter>
            <div>{children}</div>
        </StyledFooter>
    );
};

Footer.propTypes = {
    children: PropTypes.node
};

// Footer.defaultProps = {
//     siteTitle: ``
// };

export default Footer;
