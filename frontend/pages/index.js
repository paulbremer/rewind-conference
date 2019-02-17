import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import App from '../components/App';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Grid from '../components/Grid';
import withData from '../lib/withData';

const GetCurrentLineUp = ({ data: { loading, error, lineUps } }) => {
    if (error) return <h1>Error loading talks.</h1>;
    return (
        <App>
            <Header title="Rewind Conference" />
            {loading ? (
                <section>
                    <Loading />
                </section>
            ) : (
                <div>
                    <section>
                        <Grid entries={lineUps[0].talks} />
                    </section>
                </div>
            )}
        </App>
    );
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

const getCurrentLineUp = gql`
    query getCurrentLineUp {
        lineUps(where: { year: ${currentYear}, month: ${currentMonth} }) {
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
`;

export default withData(graphql(getCurrentLineUp)(GetCurrentLineUp));
