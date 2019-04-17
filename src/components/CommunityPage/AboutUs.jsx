import React from 'react';
import styles from './AboutUs.module.css';
import texts from '../../utils/Descriptions';

const AboutUs = () => (
    <div className={styles.main}>
        <div className={styles.description}>
            <div>
                {texts.community}
            </div>
        </div>
        {texts.smallThings.map((element, index) => (
            <div className={styles.element} key={index}>
                <img src={element.photo} alt="" />
                <div className={styles.desc}>
                    <div>{element.descripiton}</div>
                </div>
                <div className={styles.title}>
                    <strong>{element.title}</strong>
                </div>
            </div>
        ))}
    </div>
);

export default AboutUs;
