import React from 'react';
import PropTypes from 'prop-types';
import Salsa from './dancing-figures/Salsa.svg';
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Swing from './dancing-figures/Swing.svg';
import styles from './EventDetails.module.css';

function DanceFigure({ dance }) {
    const { name } = dance;

    const src = {
        salsa: Salsa,
        folk: Folk,
        swing: Swing,
        kizomba: Kizomba
    }

    return (
        <div className={styles.danceFigure}>
            <img src={src[name]} alt="" />
        </div>
    );
}

DanceFigure.propTypes = {
    dance: PropTypes.instanceOf(Object).isRequired,
};


export default DanceFigure;
