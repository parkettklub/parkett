import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './EventPoster.module.css';
import { dateToString } from './DateFunctions';

function EventWithPoster({
    content, photo, title, date,
}) {
    if (!content) {
        return (
            <Card>
                <div className={styles.main}>
                    <img className={styles.smallPoster} src={photo} alt="" />
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.date}>{dateToString(date)}</div>
                    </div>
                </div>
            </Card>
        );
    }
    return (
        <Card>
            <div className={styles.main}>
                <img className={styles.poster} src={photo} alt="" />
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.date}>{dateToString(date)}</div>
                    <div className={styles.description}>{content}</div>
                </div>
            </div>
        </Card>
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
