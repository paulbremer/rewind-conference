import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const Title = styled.h1`
    background-color: red;
    color: white;
    padding: 10px;
`;

const IndexPage = ({ data }) => {
    const talks = data;

    console.log(talks);

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Title>Hi people</Title>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
                

                { talks.rwconf.talks.map(item => (
                    <p>{item.id}</p>
                ))}

            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export const query = graphql`
    {
        rwconf {
            talks {
                id
            }
        }
    }
`;

export default IndexPage;
