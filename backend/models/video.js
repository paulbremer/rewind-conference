import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    youtubeUrl: String,
    speaker: String,
    title: String,
    description: String,
    image: String
}, { collection: 'videos' }); // Defining the collection is redundant in this case.

const videos = mongoose.model('videos', videoSchema);

export default videos;
