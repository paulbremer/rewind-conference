import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Video {
        _id: ID!
        name: String
        description: String
        image: String
    }
    type Query {
        getVideo(_id: String): Video
        getAllVideos: [Video]
    }
    input VideoInput {
        name: String!
        description: String
        image: String
    }
    type Mutation {
        createVideo(input: VideoInput) : Video
    }
`

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
