import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Community.module.css';

function Member({
    src = profDefault, position, description, name,
}) {
    return (
        <div className={styles.element}>
            <img src={src} alt="" />
            <div className={styles.desc}>
                <div>{position}</div>
                <br />
                <div>{description}</div>
            </div>
            <div className={styles.title}>
                <strong>{name}</strong>
            </div>
        </div>
    );
}

Member.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


export default Member;
