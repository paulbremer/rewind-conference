import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TalkItem = styled.article`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-basis: calc(50% - 1rem);
        margin-bottom: 2rem;
        ${({ isSecond }) =>
            isSecond &&
            css`
                margin-right: 2rem;
            `}
    }
`;

const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const StyledTitle = styled.div`
    h1 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
        color: rgba(66, 80, 92, 0.6);
    }
`;

const StyledTags = styled.div`
    display: none;
    @media screen and (min-width: 400px) {
        display: block;
        margin-left: 1rem;

        span {
            font-size: 0.9rem;
            padding: 0.5rem;
            border-radius: 16px;
            background-color: rgba(121, 130, 139, 0.1);
        }
    }
`;

const StyledIframe = styled.iframe`
    width: 100%;
    min-height: 250px;
    background-color: grey;
`;

const ContenWrapper = styled.section`
    line-height: 1.5;
    flex-grow: 1;
`;

const ItemContent = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    text-align: right;
    padding: 1rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.shadow};

    h2 {
        font-size: 1.06rem;
        margin-bottom: 1rem;
        text-align: left;
        min-height: 54px;
    }
`;

const StyledDescription = styled.p`
    text-align: left;
    @supports (-webkit-line-clamp: 2) {
        display: ${props => (props.expanded ? `block` : `-webkit-box`)};
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

const Button = styled.button`
    display: none;
    border: none;
    background-color: transparent;
    @supports (-webkit-line-clamp: 2) {
        display: inline-block;
        text-align: right;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 1.8px;
        color: ${({ theme }) => theme.colors.red};
        text-transform: uppercase;
        cursor: pointer;
    }
`;

const Footer = styled.footer`
    display: block;
    text-align: right;
    padding: 1rem;
`;

const Item = ({ talk, ...props }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <TalkItem {...props}>
            <Header>
                <StyledTitle>
                    <h1>{talk.speaker}</h1>
                    <h2>{talk.conference}</h2>
                </StyledTitle>
                <StyledTags>
                    <span>{talk.tags[0]}</span>
                </StyledTags>
            </Header>

            <StyledIframe
                title={talk.title}
                src={`https://www.youtube.com/embed/${talk.youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            <ContenWrapper>
                <ItemContent>
                    <h2>{talk.title}</h2>
                    <StyledDescription expanded={expanded}>{talk.description}</StyledDescription>

                    <Footer>
                        <Button
                            type="button"
                            tabindex="0"
                            onClick={() => setExpanded(prevMode => !prevMode)}
                        >
                            Read {expanded ? 'less' : 'more'}
                        </Button>
                    </Footer>
                </ItemContent>
            </ContenWrapper>

        </TalkItem>
    );
};

Item.propTypes = {
    talk: PropTypes.object.isRequired,
    expanded: PropTypes.bool
};

export default Item;
