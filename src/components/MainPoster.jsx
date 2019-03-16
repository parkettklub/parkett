import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPoster.module.css';

function MainPoster({
    photo, onClick, small,
}) {
    return (
        <div
            className={styles.main}
            onClick={onClick}
            role="button"
            onKeyDown={() => { }}
            tabIndex={0}
        >
            <div className={small ? styles.small : styles.poster}>
                <img src={photo} alt="" />
            </div>
        </div>
    );
}

MainPoster.propTypes = {
    photo: PropTypes.string,
    onClick: PropTypes.func,
    small: PropTypes.bool,
};

MainPoster.defaultProps = {
    photo: '',
    onClick: null,
    small: false,
};

export default MainPoster;
