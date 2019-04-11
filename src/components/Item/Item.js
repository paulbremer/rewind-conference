import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
    background-color: #fff;
    margin-bottom: 1rem;
`;

const StyledHeader = styled.header`
    padding: 1rem;
    display: flex;
    align-items: center;
`;

const StyledTitle = styled.div`
    width: 100%;

    h2 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 400;
    }
`;

const StyledTags = styled.div`
    margin-left: 1rem;

    span {
        font-size: 0.9rem;
        padding: 0.5rem;
        border-radius: 16px;
        background-color: rgba(121, 130, 139, 0.1);
    }
`;

const StyledIframe = styled.iframe`
    width: 100%;
    min-height: 200px;
`;

const StyledContent = styled.div`
    padding: 1rem;
    line-height: 1.5;

    h2 {
        font-size: 18px;
        margin-bottom: 1rem;
    }
`;

const StyledDescription = styled.p`
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
        display: block;
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
                    src={`https://www.youtube.com/embed/${talk.youtubeId}`}
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
