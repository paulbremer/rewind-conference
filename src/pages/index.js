import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Item from '../components/Item/Item';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
    const talks = data;
    console.log(talks);

    return (
        <Layout>
            <SEO title="Rewind Conference" keywords={[`gatsby`, `application`, `react`]} />

            {talks.rwconf.lineUps[0].talks.map(talk => (
                <Item key={talk.id} talk={talk} />
            ))}
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
    data: PropTypes.object.isRequired
};

export default IndexPage;
