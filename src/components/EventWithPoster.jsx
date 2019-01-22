import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './EventPoster.module.css';

function EventWithPoster({
    description, poster, title, date,
}) {
    if (!description) {
        return (
            <Card>
                <div className={styles.main}>
                    <img className={styles.smallPoster} src={poster} alt="" />
                    <div className={styles.details}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.date}>{date}</div>
                    </div>
                </div>
            </Card>
        );
    }
    return (
        <Card>
            <div className={styles.main}>
                <img className={styles.poster} src={poster} alt="" />
                <div className={styles.details}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
        </Card>
    );
}

EventWithPoster.propTypes = {
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default EventWithPoster;
