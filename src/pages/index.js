import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Item from '../components/Item/Item';
import MailList from '../components/MailList/MailList';
import SEO from '../components/seo';
import NoTalksWarning from '../components/NoTalksWarning/NoTalksWarning';

const IndexPage = ({ data }) => {
    const [talksList, setTalksList] = useState([]);

    useEffect(() => {
        setTalksList(data.rwconf.lineUps);
    }, [talksList]);

    const displayTalks = (talk, index) => (
        <React.Fragment key={talk.id}>
            {index === 4 && <MailList />}
            <Item talk={talk} isSecond={index % 2 === 0} />
        </React.Fragment>
    );

    return (
        <Layout>
            <SEO
                title="Rewind Conference"
                keywords={[`javascript`, `conference`, `talks`, `react`]}
            />

            {talksList.length ? talksList[0].talks.map(displayTalks) : <NoTalksWarning />}
        </Layout>
    );
};

export const query = graphql`
    query getCurrentLineUp($currentYear: Int, $currentMonth: Int) {
        rwconf {
            lineUps(where: { year: $currentYear, month: $currentMonth }) {
                id
                year
                month
                talks(where: { status: PUBLISHED }) {
                    id
                    status
                    speaker
                    title
                    youtubeId
                    description
                    conference
                    tags
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default IndexPage;
