import React from 'react';
import PropTypes from 'prop-types';
import styles from './Media.module.css';
import Card from './Card';
import { dateToString } from './DateFunctions';

function MediaAlbum({
    link, name, date, icon, src,
}) {
    if (!link) return null;
    const dateStr = dateToString(date);
    return (
        <Card>
            <div className={styles.spot}>
                <div className={styles.link}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={src ? src : icon} alt="" />
                    </a>
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.date}>{dateStr}</div>
            </div>
        </Card>
    );
}

MediaAlbum.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    src: PropTypes.string,
};

MediaAlbum.defaultProps = {
    src: '',
}

export default MediaAlbum;
