import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Video {
        _id: ID!
        youtubeUrl: String!
        speaker: String!
        title: String!
        description: String!
        image: String
        lineUp: [LineUp!]!
    }
    type Query {
        getVideo(_id: String): Video
        getAllVideos: [Video]
        getLineUp(year: Int, month: Int): LineUp
        getEveryLineUp: [LineUp]
    }
    input VideoInput {
        youtubeUrl: String!
        speaker: String!
        title: String!
        description: String!
        image: String
    }
    type LineUp {
        _id: ID!
        year: Int!
        month: Int!
        videos: [Video!]!
    }
    input LineUpInput {
        year: Int!
        month: Int!
        videos: [VideoInput!]
    }
    type Mutation {
        createVideo(input: VideoInput) : Video
        createLineUp(input: LineUpInput) : LineUp
    }
`

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
