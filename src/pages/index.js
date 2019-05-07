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
        console.log('mounting', data);
        setTalksList(data.rwconf.lineUps);
    }, []);

    console.log(data);

    // const talksData = data;
    // const { talks } = talksData.rwconf.lineUps[0];
    // talksList.splice(4, 0, { id: 'cMail', maillist: true });

    return (
        <Layout>
            <SEO title="Rewind Conference" keywords={[`gatsby`, `application`, `react`]} />
            {/* {talksList.length > 0 ?

                talksList.map(talk =>
                    talk.maillist ? <MailList key={talk.id} /> : <Item key={talk.id} talk={talk} />
                )
                : <p>No talks found</p>
            } */}

            {talksList.length > 0 ? 'talks' : <NoTalksWarning message="" />}
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
