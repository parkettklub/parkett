import React from 'react';
import styles from '../CommunityPage/JoinUs.module.css';
import texts from '../../utils/Descriptions';

function newsFeedSubscription() {
    window.location.href = 'http://eepurl.com/veA7v';
}

const NewsFeed = () => (
    <div className={styles.main}>
        <div className={styles.title}>{texts.newsfeed.title}</div>
        <div className={styles.desc}>
            {texts.newsfeed.desc}
        </div>
        <div
            className={styles.submit}
            onClick={newsFeedSubscription}
            onKeyDown={() => { }}
            role="button"
            tabIndex={0}
        >
            {texts.newsfeed.button}
        </div>
    </div>
);

export default NewsFeed;
