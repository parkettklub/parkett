import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './EventMedia.module.css';

function EventMedia({ photos, video }) {
    return (
        <Card>
            <div className={styles.main}>
                <Photos photos={photos} />
                <Video video={video} />
            </div>
        </Card>
    );
}

EventMedia.propTypes = {
    photos: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
};

function Photos({ photos }) {
    if (photos) {
        return (
            <div>
                <strong>Képek a buliról:  </strong>
                <a href={photos}>Link a SPOT oldalára</a>
            </div>
        );
    }
    return (
        null
    );
}

Photos.propTypes = {
    photos: PropTypes.string.isRequired,
};

function Video({ video }) {
    if (video) {
        return (
            <div>
                <strong>Videó a buliról:  </strong>
                <a href={video}>Link a BSS oldalára</a>
            </div>
        );
    }
    return (
        null
    );
}

Video.propTypes = {
    video: PropTypes.string.isRequired,
};

export default EventMedia;
