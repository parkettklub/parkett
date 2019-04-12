import React from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.css';
import profDefault from './defaultProfile.jpg';

function Popup({
    image, position, description, name, close, next, prev,
}) {
    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <div className={styles.buttonHolder}>
                    <button onClick={prev} type="button" className={styles.step}>{'<'}</button>
                </div>
                <div className={styles.image}>
                    <img src={image ? image : profDefault} alt="alt" />
                </div>
                <div className={styles.details}>
                    <button onClick={close} type="button">Close</button>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.position}>{position}</div>
                    <div className={styles.description}>{description}</div>
                </div>
                <div className={styles.buttonHolder}>
                    <button onClick={next} type="button" className={styles.step}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}

Popup.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    close: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
};

Popup.defaultProps = {
    image: profDefault,
    name: '',
    position: '',
    description: '',
};


export default Popup;
