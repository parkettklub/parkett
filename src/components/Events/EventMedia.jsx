import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventMedia.module.css';
import MediaAlbum from '../MediaAlbum';

function EventMedia({
    photos, video, spot_cover, bss_cover,
}) {
    return (
        <div className={styles.main}>
            <MediaAlbum
                link={photos}
                src={spot_cover}
                name="Képek"
            />
            <MediaAlbum
                link={video}
                src={bss_cover}
                name="Videó"
            />
        </div>
    );
}

EventMedia.propTypes = {
    photos: PropTypes.string,
    video: PropTypes.string,
    spot_cover: PropTypes.string,
    bss_cover: PropTypes.string,
};

EventMedia.defaultProps = {
    photos: '',
    video: '',
    spot_cover: '',
    bss_cover: '',
};

function Photos({ photos }) {
    if (photos) {
        return (
            <div>
                <strong>Képek a buliról:  </strong>
                <a href={photos} target="_blank" rel="noopener noreferrer">Link a SPOT oldalára</a>
            </div>
        );
    }
    return (
        null
    );
}

Photos.propTypes = {
    photos: PropTypes.string,
};

Photos.defaultProps = {
    photos: '',
};

function Video({ video }) {
    if (video) {
        return (
            <div>
                <strong>Videó a buliról:  </strong>
                <a href={video} target="_blank" rel="noopener noreferrer">Link a BSS oldalára</a>
            </div>
        );
    }
    return (
        null
    );
}

Video.propTypes = {
    video: PropTypes.string,
};

Video.defaultProps = {
    video: '',
};

export default EventMedia;
