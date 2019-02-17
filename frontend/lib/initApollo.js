import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch;
}

// Replace this URL by your APIs simple endpoint URL:
const GRAPHCMS_API =
    'https://api-euwest.graphcms.com/v1/cjs7amwck74sf01g7wl43slkx/master';

function createClient(initialState) {
    return new ApolloClient({
        uri: GRAPHCMS_API
    });
}

export default function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return createClient(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createClient(initialState);
    }
    return apolloClient;
}
