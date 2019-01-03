import React from 'react';
import PropTypes from 'prop-types';
import Salsa from './dancing-figures/Salsa.svg';
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Swing from './dancing-figures/Swing.svg';
import styles from './EventDetails.module.css';

function DanceFigure({ dance }) {
    const { name } = dance;
    if (name === 'salsa') {
        return (
            <div className={styles.danceFigure}>
                <img src={Salsa} alt="" />
            </div>
        );
    }
    if (name === 'folk') {
        return (
            <div className={styles.danceFigure}>
                <img src={Folk} alt="" />
            </div>
        );
    }
    if (name === 'swing') {
        return (
            <div className={styles.danceFigure}>
                <img src={Swing} alt="" />
            </div>
        );
    }
    if (name === 'kizomba') {
        return (
            <div className={styles.danceFigure}>
                <img src={Kizomba} alt="" />
            </div>
        );
    }
    return (
        <div className={styles.danceFigure} />
    );
}

DanceFigure.propTypes = {
    dance: PropTypes.instanceOf(Object).isRequired,
};


export default DanceFigure;
