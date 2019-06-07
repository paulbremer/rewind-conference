import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Item from '../components/Item/Item';
import MailList from '../components/MailList/MailList';
import SEO from '../components/seo';

const ArchiveMonth = ({ data }) => {
    const [talkData, setTalkData] = useState([]);

    useEffect(() => {
        const { talks } = data.rwconf.lineUps[0];
        setTalkData(talks);
        if (talks.length === 10 || talks.length === 8)
            talks.splice(4, 0, { id: 'cMail', maillist: true });
    }, [data.rwconf.lineUps]);

    return (
        <Layout>
            <SEO
                title="Rewind Conference"
                keywords={[`javascript`, `conference`, `talks`, `react`]}
            />

            {talkData.map(talk =>
                talk.maillist ? <MailList key={talk.id} /> : <Item key={talk.id} talk={talk} />
            )}
        </Layout>
    );
};

export const query = graphql`
    query getCurrentMonth($year: Int!, $month: Int!) {
        rwconf {
            lineUps(where: { year: $year, month: $month }) {
                talks(where: { status: PUBLISHED }, orderBy: createdAt_DESC) {
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

ArchiveMonth.propTypes = {
    data: PropTypes.object.isRequired
};

export default ArchiveMonth;
