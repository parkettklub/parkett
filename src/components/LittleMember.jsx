import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Community.module.css';

function LittleMember({ src = profDefault, name }) {
    return (
        <div className={`${styles.element} ${styles.small}`}>
            <img src={src} alt="" />
            <div className={styles.title}>
                <strong>{name}</strong>
            </div>
        </div>
    );
}

LittleMember.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default LittleMember;
