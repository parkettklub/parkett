import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Community.module.css';

function Member({
    image, position, description, name,
}) {
    return (
        <div className={styles.element}>
            <img src={image ? image : profDefault} alt="" />
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
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
};

Member.defaultProps = {
    image: profDefault,
    name: '',
    position: '',
    description: '',
};

export default Member;
