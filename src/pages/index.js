import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
    const talks = data;
    console.log(talks);

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <p>Welcome to your new Gatsby site.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                {talks.rwconf.lineUps[0].talks.map(talk => (
                    <div key={talk.id}>
                        <h3>{talk.title}</h3>
                        <h4>{talk.speaker}</h4>
                        <p>{talk.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
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
                talks {
                    id
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

export default IndexPage;
