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

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth() + 1;

export const query = graphql`
    query getCurrentLineUp($year: Int, $month: Int) {
        rwconf {
            lineUps(where: { year: $year, month: $month }) {
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
