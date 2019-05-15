import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import { hexToRgba } from '../../helpers/helpers';

const url =
    'https://gmail.us20.list-manage.com/subscribe/post?u=abb450c84ce668adeafd887be&id=2d1223e6f0';

const StyledMailList = styled.div`
    flex-basis: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.shadow};
    background-color: ${({ theme }) => theme.colors.blue};
    background-image: ${({ theme }) => theme.gradient.blue};
    margin-bottom: 1rem;
    padding: 2rem 2rem 2.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-bottom: 2rem;
    }

    h2 {
        color: ${({ theme }) => theme.colors.white};
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
        background-color: ${({ theme }) => theme.colors.white};

        &:focus {
            outline-color: ${({ theme }) => theme.colors.primary};
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
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        border: 0;
        padding: 0.6rem;
        vertical-align: top;
        cursor: pointer;

        &:focus {
            background-color: ${hexToRgba(({ theme }) => theme.colors.primary, 0.9)};
            outline-color: ${({ theme }) => theme.colors.primary};
        }
        &:hover {
            background-color: ${hexToRgba(({ theme }) => theme.colors.primary, 0.9)};
        }

        @media screen and (min-width: 768px) {
            padding: 0.64rem;
        }
    }
`;

const StyledMailWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > div {
        flex-basis: 100%;
        order: 3;
        margin-top: 5px;
    }
`;

const Message = styled.div`
    color: white;

    a {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const CustomForm = ({ status = false, message = '', onValidated = () => {} }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        });

    return (
        <>
            {status === 'sending' && <Message>Getting you on that list 💪🏼</Message>}
            {status === 'error' && <Message dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <Message>You are in! 🎉</Message>}

            <input ref={node => (email = node)} type="email" placeholder="Your email" />
            <button type="button" onClick={submit}>
                Submit
            </button>
        </>
    );
};

const MailList = () => (
    <StyledMailList>
        <h2>Get an update if the new curated list is online!</h2>
        <StyledMailWrapper>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </StyledMailWrapper>
    </StyledMailList>
);

CustomForm.propTypes = {
    status: PropTypes.string,
    message: PropTypes.string,
    onValidated: PropTypes.func,
};

export default MailList;
