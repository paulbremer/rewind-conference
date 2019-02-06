import lineUp from './models/lineUp';
import videos from './models/video';

export const resolvers = {
    Query: {
        async getVideo(root, { _id }) {
            return await videos.findById(_id);
        },
        async getAllVideos() {
            return await videos.find({});
        },
        async getLineUp(root, { year, month }) {
            return await lineUp.findOne({ year, month });
        }
    },
    Mutation: {
        async createVideo(root, { input }) {
            return await videos.create(input);
        },
        async createLineUp(root, { input }) {
            return await lineUp.create(input);
        }
    }
};
