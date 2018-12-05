import React from 'react';
import PropTypes from 'prop-types';
import EventWithPoster from './EventWithPoster';
import Plakat01 from './Plakat.png';
import styles from './Article.module.css';

function EventParty({
    title = 'Élőzenés Salsa Party: Cuba',
    photo = Plakat01,
    startDate = '2018-01-12T18:00',
    content = 'Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.',
}) {
    const details = {
        title,
        date: `${startDate.split('T')[0]} ${startDate.split('T')[1]}`,
        description: content,
        poster: photo,
    };

    return (
        <div className={styles.main}>
            <EventWithPoster details={details} />
        </div>
    );
}

EventParty.propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.instanceOf(Object).isRequired,
    startDate: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
export default EventParty;
