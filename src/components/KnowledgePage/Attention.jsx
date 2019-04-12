import React from 'react';
import texts from '../../utils/Descriptions';
import styles from './Knowledge.module.css';

const Attention = () => (
    <div>
        <div className={styles.title}>Figyelem!</div>
        <div>
            {texts.attention}
        </div>
    </div>
);

export default Attention;
