import Head from 'next/head';

const App = ({ children }) => (
    <div>
        <Head>
            <title>Rewind Conference</title>
            <link
                href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
                rel="stylesheet"
            />
        </Head>
        {children}
        <style jsx global>{`
            * {
                font-family: 'Source Sans Pro', sans-serif;
            }
            body {
                margin: 0;
                color: white;
                background-color: rgb(28, 32, 53);
            }
            section {
                width: 100%;
                max-width: 960px;
                margin: 0 auto;
                position: relative;
                padding-top: 100px;
            }
        `}</style>
    </div>
);

export default App;
