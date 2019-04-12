import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventPoster.module.css';
import { dateToString } from '../../utils/DateFunctions';

function EventWithPoster({
    content, photo, title, date,
}) {
    if (!content) {
        return (
            <div className={styles.main}>
                <img className={styles.smallPoster} src={photo} alt="" />
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.date}>{dateToString(date)}</div>
                </div>
            </div>
        );
    }
    return (
        <div className={styles.main}>
            <img className={styles.poster} src={photo} alt="" />
            <div className={styles.details}>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{dateToString(date)}</div>
                <div className={styles.description}>{content}</div>
            </div>
        </div>
    );
}

EventWithPoster.propTypes = {
    content: PropTypes.string,
    photo: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string.isRequired,
};

EventWithPoster.defaultProps = {
    content: '',
    photo: '',
    title: '',
};

export default EventWithPoster;
