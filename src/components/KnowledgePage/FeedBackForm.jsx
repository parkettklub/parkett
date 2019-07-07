import React from 'react';
import styles from '../CommunityPage/JoinUs.module.css';
import texts from '../../utils/Descriptions';

function newsFeedSubscription() {
    window.location.href = 'https://forms.gle/vVWavNhnNhYrgRnx9';
}

const Attention = () => (
    <div className={styles.main}>
        <div className={styles.title}>{texts.knowledge.feedbackForm.title}</div>
        <div className={styles.desc}>
            {texts.knowledge.feedbackForm.description}
        </div>
        <div
            className={styles.submit}
            onClick={newsFeedSubscription}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {texts.knowledge.feedbackForm.button}
        </div>
    </div>
);

export default Attention;