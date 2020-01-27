import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventMedia.module.css';
import MediaAlbum from '../MediaPage/MediaAlbum';
import texts from '../../utils/Descriptions';

function EventMedia({
    photos, video, spot_cover, bss_cover,
}) {
    return (
        <div className={styles.main}>
            <MediaAlbum
                link={photos}
                src={spot_cover}
                name={texts.eventdesc.pictures}
            />
            <MediaAlbum
                link={video}
                src={bss_cover}
                name={texts.eventdesc.video}
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

export default EventMedia;
