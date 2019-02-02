import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.connect(`mongodb://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}.mlab.com:42459/rewind-db`, { useNewUrlParser: true })

const server = new GraphQLServer({ schema });

server.start(() => console.log('Server is running on localhost:4000'))
