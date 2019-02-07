import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogo from './facebook-app-logo.svg';
import Card from './Card';
import styles from './EventList.module.css';
import { dateToString } from './DateFunctions';

function EventSummary({
    formlink, music, startDate, facebook_event, id, onClick, photo, title, old,
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
    if (facebook_event) {
        facebookLink.push(
            <a
                href={facebook_event}
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
                        <img alt="" src={photo} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div>{dateToString(startDate)}</div>
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
    formlink: PropTypes.string,
    music: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    facebook_event: PropTypes.string,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    photo: PropTypes.string,
    title: PropTypes.string,
    old: PropTypes.bool,
};

EventSummary.defaultProps = {
    formlink: '',
    music: '',
    facebook_event: '',
    photo: '',
    title: '',
    old: false,
};

export default EventSummary;
