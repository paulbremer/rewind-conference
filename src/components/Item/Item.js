import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../assets/theme';

const StyledItem = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 ${theme.colors.shadow};
    background-color: white;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        flex-basis: calc(50% - 1rem);
        margin-bottom: 2rem;

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(2n + 6) {
            margin-right: 1rem;
        }

        &:nth-child(2),
        &:nth-child(4),
        &:nth-child(2n + 5) {
            margin-left: 1rem;
        }
    }
`;

const StyledHeader = styled.header`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledTitle = styled.div`
    h2 {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
    }

    h3 {
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
`;

const StyledContent = styled.div`
    padding: 1rem;
    line-height: 1.5;
    text-align: right;

    h2 {
        font-size: 18px;
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

const StyledButton = styled.a`
    display: none;
    @supports (-webkit-line-clamp: 2) {
        margin-top: 0.5rem;
        display: inline-block;
        text-align: right;
        padding: 0.5rem;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: 1.8px;
        color: #eb2f5a;
        text-transform: uppercase;
        cursor: pointer;
    }
`;

class Item extends React.Component {
    state = {
        expanded: false
    };

    render() {
        const { talk } = this.props;
        const { expanded } = this.state;

        return (
            <StyledItem>
                <StyledHeader>
                    <StyledTitle>
                        <h2>{talk.speaker}</h2>
                        <h3>{talk.conference}</h3>
                    </StyledTitle>
                    <StyledTags>
                        <span>{talk.tags[0]}</span>
                    </StyledTags>
                </StyledHeader>

                <StyledIframe
                    title={talk.title}
                    src={`https://www.youtube.com/embed/${talk.youtubeId}?origin=https://rewindconference.com`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                <StyledContent>
                    <h2>{talk.title}</h2>

                    <StyledDescription expanded={expanded}>{talk.description}</StyledDescription>

                    <StyledButton
                        tabindex="0"
                        onClick={() => this.setState({ expanded: !expanded })}
                    >
                        Read {expanded ? 'less' : 'more'}
                    </StyledButton>
                </StyledContent>
            </StyledItem>
        );
    }
}

Item.propTypes = {
    talk: PropTypes.object.isRequired,
    expanded: PropTypes.bool
};

export default Item;
