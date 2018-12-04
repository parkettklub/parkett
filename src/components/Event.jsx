import React from 'react';
import PropTypes from 'prop-types';
import './EventList.css';
import FacebookLogo from './facebook-app-logo.svg';
import Card from './Card';
import styles from './EventList.module.css';

function EventSummary({
    formlink, music, startDate, facebook, id, onClick, poster, title, old,
}) {
    const detailsrows = [];
    if (formlink) {
        detailsrows.push(
            <div key="form">
                <a
                    href={formlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key="FormLink"
                    onClick={(event) => { event.stopPropagation(); }}
                >
                    {'Link a formhoz'}
                </a>
            </div>,
        );
    }

    if (music) {
        detailsrows.push(
            <div key="music"><strong>{music}</strong></div>,
        );
    }

    const facebookLink = [];
    if (facebook) {
        facebookLink.push(
            <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                key="FacebookLink"
                onClick={(event) => { event.stopPropagation(); }}
            >
                <img src={FacebookLogo} alt="" />
            </a>,
        );
    }

    return (
        <div
            className={`${styles.event} ${old ? styles.old : ''} ${onClick ? styles.clickable : ''}`}
            key={id}
            onClick={onClick}
            role="button"
            onKeyDown={() => { }}
            tabIndex={0}
        >
            <Card>
                <div className={styles.grid}>
                    <div className={styles.posterCropper}>
                        <img alt="" src={poster} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div>{`${startDate.split('T')[0]} ${startDate.split('T')[1]}`}</div>
                        {detailsrows}
                    </div>
                    <div className={styles.facebook}>
                        {facebookLink}
                    </div>
                </div>
            </Card>
        </div>
    );
}

EventSummary.propTypes = {
    formlink: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    old: PropTypes.bool.isRequired,
};

export default EventSummary;
