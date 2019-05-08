import React from 'react';
import MailingList from '../MailList/MailList';

const NoTalksWarning = () => (
    <section>
        <p>No talks found, please come back later</p>
        <p>In the meantime, sign up</p>

        <MailingList />
    </section>
);

export default NoTalksWarning;
