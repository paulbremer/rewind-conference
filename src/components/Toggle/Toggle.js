import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TriggerBox = styled.label`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 2px;
    transition: background-color 0.4s ease;
    display: block;
    width: 60px;
    height: 32px;
    border-radius: 2em;
    outline: 0;
    position: relative;
    box-shadow: inset -1px 3px 2px #00000050;

    &:after {
        position: relative;
        display: block;
        content: '';
        width: 50%;
        height: 100%;
        border-radius: 50%;
        background: white;
        transition: left 0.2s ease;
        left: 0;
    }
`;

const Input = styled.input`
    display: none;
    &:checked {
        & + ${TriggerBox} {
            background-color: #0017b6;

            &:after {
                left: 50%;
            }
        }
    }
`;

const Toggle = ({ isActive = false, ...props }) => (
    <React.Fragment>
        <Input type="checkbox" id="theme-toggle" defaultChecked={isActive} {...props} />
        <TriggerBox htmlFor="theme-toggle" />
    </React.Fragment>
);

Toggle.propTypes = {
    isActive: PropTypes.bool
};

export default Toggle;
