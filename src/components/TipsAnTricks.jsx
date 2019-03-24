import React from 'react';
import texts from './Descriptions';
import styles from './TipsAndTricks.module.css';

const TipsAndTricks = () => (
    <div>
        <div>Általános buli leírás</div>
        <div className={styles.long}>{texts.tips.main}</div>
        <div><strong>Mit vegyek fel? </strong></div>
        <div className={styles.list}>
            {texts.tips.cloths.map((text, index) => (<li key={index}>{text}</li>))}
        </div>
        <div key="7"><strong>Milyen cipőben menjek? </strong></div>
        <div className={styles.list}>
            {texts.tips.shoes.map((text, index) => (<li key={index}>{text}</li>))}
        </div>
        <div key="17"><strong>Figyelj a higéniára! </strong></div>
        <div className={styles.list}>
            {texts.tips.hygine.map((text, index) => (<li key={index}>{text}</li>))}
        </div>
        <div key="20"><strong>Evés-ivés, dohányzás </strong></div>
        <div className={styles.list}>
            {texts.tips.eat.map((text, index) => (<li key={index}>{text}</li>))}
        </div>
    </div>
);

export default TipsAndTricks;
