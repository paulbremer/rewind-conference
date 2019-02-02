import videos from './models/video';

export const resolvers = {
    Query: {
        async getVideo(root, { _id }) {
            return await videos.findById(_id);
        },
        async getAllVideos() {
            return await videos.find({});
        },
    },
    Mutation: {
        async createVideo(root, { input }) {
            return await videos.create(input);
        }
    }
};
