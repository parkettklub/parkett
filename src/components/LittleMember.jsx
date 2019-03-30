import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Community.module.css';

function LittleMember({ image, name }) {
    return (
        <div className={`${styles.element} ${styles.small}`}>
            <img src={image ? image : profDefault} alt="" />
            <div className={styles.title}>
                <strong>{name}</strong>
            </div>
        </div>
    );
}

LittleMember.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
};

LittleMember.defaultProps = {
    name: '',
    image: profDefault,
};

export default LittleMember;
