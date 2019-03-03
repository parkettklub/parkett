import React from 'react';
import styles from './Community.module.css';
import texts from './Descriptions';

const AboutUs = () => (
    <div className={styles.instagram}>
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
