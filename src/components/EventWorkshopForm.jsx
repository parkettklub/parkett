import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './EventForm.module.css';

function EventWorkshopForm({ linkedParty, link, teachers }) {
    const rows = [];
    if (linkedParty) {
        rows.push(
            <div className="eventdetail-paragraph">
                {'A workshop résztvevői ingyenesen részt vehetnek a '}
                <strong>{linkedParty.title}</strong>
                {' nevű rendezvényen amely '}
                <strong>{linkedParty.startDate}</strong>
                {' estéjén lesz megrendezve '}
            </div>,
        );
    }

    return (
        <Card>
            <div className={styles.main}>
                <div className={styles.paragraph}>
                    <strong>JELENTKEZNI az alábbi linken lehet:  </strong>
                    <a href={link}>Link a formhoz</a>
                </div>
                <div className={styles.paragraph}>
                    {'Siess, a helyek limitáltak! Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. A workshop csak elegendő számú jelentkező esetén indul.'}
                </div>
                <div className={styles.paragraph} hidden={!teachers}>
                    {'A tánccal '}
                    <a href={teachers ? teachers.url : ''}>{teachers ? teachers.name : ''}</a>
                    {' fognak megismertetni'}
                </div>
                {rows}
            </div>
        </Card>
    );
}

EventWorkshopForm.propTypes = {
    linkedParty: PropTypes.instanceOf(Object).isRequired,
    link: PropTypes.string.isRequired,
    teachers: PropTypes.instanceOf(Object).isRequired,
};

export default EventWorkshopForm;
