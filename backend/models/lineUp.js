import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const lineUpSchema = new Schema({
    year: Intl,
    month: Intl,
    videos: Array,
}, { collection: 'lineup' }); // Defining the collection is redundant in this case.

const lineUp = mongoose.model('lineup', lineUpSchema);

export default lineUp;
