import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

const mongoDB = `mongodb://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@ds042459.mlab.com:42459/rewind-db?authSource=rewind-db&w=1`;

// Exit application on error
mongoose.connection.on('error', err => {
    console.log(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
});

const connection = mongoose.connect(mongoDB, { useNewUrlParser: true });

const server = new GraphQLServer({ schema });

server.start(() => console.log('Server is running on localhost:4000'));
