import React from 'react';
import PropTypes from 'prop-types';
import profDefault from './defaultProfile.jpg';
import styles from './Member.module.css';

function LittleMember({ image, name, onClick }) {
    return (
        <div
            className={`${styles.element} ${styles.small}`}
            onClick={onClick}
            onKeyDown={() => { }}
            tabIndex={0}
            role="button"
        >
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
    onClick: PropTypes.func.isRequired,
};

LittleMember.defaultProps = {
    name: '',
    image: profDefault,
};

export default LittleMember;
