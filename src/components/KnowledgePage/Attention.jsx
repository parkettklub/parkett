import React from 'react';
import texts from '../../utils/Descriptions';
import styles from './Knowledge.module.css';

const Attention = () => (
    <div>
        <div className={styles.title}>{texts.attention.title}</div>
        <div>
            {texts.attention.desc}
        </div>
    </div>
);

export default Attention;
