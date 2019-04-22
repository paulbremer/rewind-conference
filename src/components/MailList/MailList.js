import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
    'https://gmail.us20.list-manage.com/subscribe/post?u=abb450c84ce668adeafd887be&id=2d1223e6f0';

const StyledMailList = styled.div`
    flex-basis: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    background-color: #fff;
    background-image: linear-gradient(29deg, #071fc8, #0017b6);
    margin-bottom: 1rem;
    padding: 2rem 2rem 2.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
    }

    h2 {
        color: white;
        font-size: 0.9rem;
        margin: 0.5rem 0 1rem;

        @media screen and (min-width: 375px) {
            font-size: 1.1rem;
            margin: 0 0 1rem;
        }

        @media screen and (min-width: 768px) {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
    }

    input[type='email'] {
        font-family: 'Poppins', 'Noto Sans', 'Helvetica', sans-serif;
        font-size: 1rem;
        padding: 0.25rem;
        border: 0;
        width: 70%;

        &:focus {
            outline-color: #eb2f5a;
        }

        @media screen and (min-width: 420px) {
            width: 250px;
        }

        @media screen and (min-width: 768px) {
            font-size: 0.8rem;
            padding: 0.5rem;
        }
    }

    button {
        background-color: #eb2f5a;
        color: white;
        border: 0;
        padding: 0.6rem;
        vertical-align: top;
        cursor: pointer;

        &:focus {
            background-color: rgba(235, 47, 90, 0.9);
            outline-color: #eb2f5a;
        }
        &:hover {
            background-color: rgba(235, 47, 90, 0.9);
        }

        @media screen and (min-width: 768px) {
            padding: 0.64rem;
        }
    }
`;

class MailList extends React.Component {
    render() {
        return (
            <StyledMailList>
                <h2>Get an update if the new curated list is online!</h2>
                <MailchimpSubscribe url={url} />
            </StyledMailList>
        );
    }
}

export default MailList;
